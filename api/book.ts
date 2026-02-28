// api/book.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

interface BookingData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    curriculum: string;
    sessionType: string;
    preferredDate: string;
    preferredTime: string;
    message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!process.env.RESEND_API_KEY) {
        console.error("Missing process.env.RESEND_API_KEY in Vercel settings");
        return res.status(500).json({ error: 'Server misconfiguration: Email service is not configured.' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const data: BookingData = req.body;

    const createCalendarLink = (date: string, time: string, session: string) => {
        try {
            const [year, month, day] = date.split('-');
            let [hourStr, minuteStr] = time.split(':');
            const hour = parseInt(hourStr);
            const startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hour, parseInt(minuteStr));
            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
            const format = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
            const title = encodeURIComponent(`Fastlane Session: ${session}`);
            const details = encodeURIComponent('Your Fastlane consulting session has been scheduled. Looking forward to meeting you!');
            return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${format(startDate)}/${format(endDate)}&details=${details}`;
        } catch (e) {
            return 'https://calendar.google.com';
        }
    };

    const formatTime = (time: string) => {
        try {
            const [hour, minute] = time.split(':').map(Number);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const h = hour % 12 || 12;
            return `${h}:${minute.toString().padStart(2, '0')} ${ampm}`;
        } catch (e) {
            return time;
        }
    };

    if (!data.email || !data.firstName || !data.sessionType) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const transId = Math.floor(1000 + Math.random() * 9000);

        // 1️⃣ Email to user (Client Confirmation)
        const { data: clientData, error: clientError } = await resend.emails.send({
            from: 'Fastlane <hello@fastlanetutors.com>',
            to: data.email,
            subject: `Booking Confirmation #${transId} - Fastlane`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Booking Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8f8f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #eeeeee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="background-color: #000000; color: #ffffff; padding: 25px; text-align: center;">
                    <h1 style="font-size: 16px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">Booking Confirmation</h1>
                </div>
                
                <div style="padding: 40px;">
                    <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 20px 0; color: #111111;">Your session is booked!</h2>
                    <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-top: 10px;">
                        Hi ${data.firstName}, we've received your booking request. Our team will review your details and reach out to you within 24 hours.
                    </p>
                    
                    <div style="background-color: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0; border: 1px solid #eeeeee;">
                        <h3 style="color: #888888; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0; border-bottom: 1px solid #eeeeee; padding-bottom: 8px;">Your Details</h3>
                        
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="color: #111111; font-size: 14px;">
                            <tr>
                                <td style="padding: 8px 0; color: #666666; width: 40%;">Name</td>
                                <td style="padding: 8px 0; font-weight: 600;">${data.firstName} ${data.lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #666666;">Phone</td>
                                <td style="padding: 8px 0; font-weight: 600;">${data.phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #666666;">Session</td>
                                <td style="padding: 8px 0; font-weight: 600; text-transform: capitalize;">${data.sessionType}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #666666;">Curriculum</td>
                                <td style="padding: 8px 0; font-weight: 600; text-transform: capitalize;">${data.curriculum}</td>
                            </tr>
                                          <tr><td style="color: #666666; padding: 8px 0;">Date</td><td style="padding: 8px 0; font-weight: 600;">${data.preferredDate}</td></tr>
                                          <tr><td style="color: #666666; padding: 8px 0;">Time</td><td style="padding: 8px 0; font-weight: 600;">${formatTime(data.preferredTime)}</td></tr>
                                      </table>
                        
                        ${data.message ? `
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eeeeee;">
                            <p style="color: #666666; font-size: 12px; margin-bottom: 8px; text-transform: uppercase;">Notes:</p>
                            <p style="color: #111111; font-size: 14px; line-height: 1.5; font-style: italic; margin: 0; border-left: 2px solid #000000; padding-left: 15px;">"${data.message}"</p>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #eeeeee;">
                        <a href="${createCalendarLink(data.preferredDate, data.preferredTime, data.sessionType)}" style="display: inline-block; background-color: #4285F4; color: #ffffff; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px; margin-bottom: 15px;">Add to Google Calendar</a>
                        <br>
                        <a href="https://www.fastlanetutors.com" style="display: inline-block; color: #666666; text-decoration: underline; font-size: 13px;">Return to Website</a>
                    </div>
                </div>
                
                <div style="background-color: #f9f9f9; padding: 15px; text-align: center; color: #999999; font-size: 11px; border-top: 1px solid #eeeeee;">
                    <p style="margin: 0;">© 2026 Fastlane Agency. Lagos, Nigeria.</p>
                </div>
            </div>
        </body>
        </html>
      `,
            text: `Hi ${data.firstName}, we've received your booking request for ${data.sessionType} on ${data.preferredDate} at ${formatTime(data.preferredTime)}. Reference: #${transId}.`,
            replyTo: 'Halimgiwa@gmail.com',
        });

        if (clientError) {
            console.error('Failed to send client email:', clientError);
            throw new Error('Failed to send client email: ' + clientError.message);
        }

        // 2️⃣ Email to owner (Admin Notification)
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'Fastlane <hello@fastlanetutors.com>',
            to: 'Halimgiwa@gmail.com',
            subject: `NEW BOOKING #${transId}: ${data.firstName} ${data.lastName}`,
            html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: sans-serif; color: #111111; line-height: 1.5; background-color: #f8f8f8; padding: 20px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eeeeee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="background-color: #000000; color: #ffffff; padding: 25px; text-align: center;">
                    <h1 style="font-size: 16px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">Admin Notification</h1>
                </div>
                
                <div style="padding: 40px;">
                    <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 25px 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">New Booking Alert #${transId}</h2>
                    
                    <div style="margin-bottom: 30px;">
                        <p style="margin: 10px 0; font-size: 14px;"><strong>Client Name:</strong> ${data.firstName} ${data.lastName}</p>
                        <p style="margin: 10px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a></p>
                        <p style="margin: 10px 0; font-size: 14px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #0066cc;">${data.phone}</a></p>
                    </div>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                        <p style="margin: 5px 0; font-size: 14px;"><strong>Session Type:</strong> ${data.sessionType}</p>
                        <p style="margin: 5px 0; font-size: 14px;"><strong>Curriculum:</strong> ${data.curriculum}</p>
                        <p style="margin: 5px 0; font-size: 14px;"><strong>Date:</strong> ${data.preferredDate}</p>
                        <p style="margin: 5px 0; font-size: 14px;"><strong>Time:</strong> ${formatTime(data.preferredTime)}</p>
                    </div>

                    ${data.message ? `
                    <div style="margin-top: 25px;">
                        <p style="margin: 0 0 10px 0; font-size: 13px; color: #666; font-weight: 700;">MESSAGE FROM CLIENT:</p>
                        <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; font-style: italic; font-size: 14px;">
                            "${data.message}"
                        </div>
                    </div>
                    ` : ''}
                    
                    <div style="margin-top: 40px; text-align: center;">
                        <a href="mailto:${data.email}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 15px 35px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Reply to Client</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `,
            text: `New Booking Request #${transId}: ${data.firstName} ${data.lastName} has booked a ${data.sessionType} session for ${data.preferredDate}. Email: ${data.email}.`,
            replyTo: data.email,
        });

        if (adminError) {
            console.error('Failed to send admin email:', adminError);
            throw new Error('Failed to send admin email: ' + adminError.message);
        }

        return res.status(200).json({
            message: 'Booking emails sent successfully!',
            clientMessageId: clientData?.id,
            adminMessageId: adminData?.id
        });
    } catch (error: any) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Failed to send booking emails: ' + (error.message || 'Unknown error') });
    }
}
