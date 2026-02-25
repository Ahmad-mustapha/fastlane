import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import vercel from 'vite-plugin-vercel'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      vercel(),
      {
        name: 'local-api-handler',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/book' && req.method === 'POST') {
              const chunks: any[] = [];
              req.on('data', chunk => { chunks.push(chunk); });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(Buffer.concat(chunks).toString());

                  // Calendar Link Generator
                  const createCalendarLink = (date: string, time: string, session: string) => {
                    try {
                      const [y, m, d] = date.split('-');
                      const [h, min] = time.split(':');
                      const start = new Date(parseInt(y), parseInt(m) - 1, parseInt(d), parseInt(h), parseInt(min));
                      const end = new Date(start.getTime() + 60 * 60 * 1000);
                      const fmt = (dt: Date) => dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
                      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Fastlane Session: ' + session)}&dates=${fmt(start)}/${fmt(end)}`;
                    } catch { return '#'; }
                  };

                  // Time Formatter
                  const formatTime = (t: string) => {
                    try {
                      const [h, m] = t.split(':').map(Number);
                      const ampm = h >= 12 ? 'PM' : 'AM';
                      const hour = h % 12 || 12;
                      return `${hour}:${m.toString().padStart(2, '0')} ${ampm}`;
                    } catch { return t; }
                  };

                  const { Resend } = await import('resend');
                  const resend = new Resend(env.RESEND_API_KEY);

                  // Client Email (Professional Template)
                  await resend.emails.send({
                    from: 'Fastlane <onboarding@resend.dev>',
                    to: data.email,
                    subject: 'Booking Confirmation - Fastlane',
                    html: `
                      <!DOCTYPE html>
                      <html>
                      <head><meta charset="utf-8"></head>
                      <body style="margin: 0; padding: 0; background-color: #f8f8f8; font-family: -apple-system, sans-serif;">
                          <div style="max-width: 600px; margin: 20px auto; background-color: #fff; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                              <div style="background-color: #000; color: #fff; padding: 25px; text-align: center;">
                                  <h1 style="font-size: 16px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">Booking Confirmation</h1>
                              </div>
                              <div style="padding: 40px;">
                                  <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 20px 0; color: #000;">Your session is booked!</h2>
                                  <p style="color: #666; font-size: 16px; line-height: 1.6;">Hi ${data.firstName}, we've received your booking request. Our team will review your details and reach out to you within 24 hours.</p>
                                  
                                  <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin: 30px 0; border: 1px solid #eee;">
                                      <h3 style="color: #888; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Your Session Details</h3>
                                      <table role="presentation" width="100%" style="color: #111; font-size: 14px;">
                                          <tr><td style="color: #666; padding: 8px 0; width: 40%;">Name</td><td style="font-weight: 600;">${data.firstName} ${data.lastName}</td></tr>
                                          <tr><td style="color: #666; padding: 8px 0;">Session</td><td style="font-weight: 600;">${data.sessionType}</td></tr>
                                          <tr><td style="color: #666; padding: 8px 0;">Curriculum</td><td style="font-weight: 600;">${data.curriculum}</td></tr>
                                          <tr><td style="color: #666; padding: 8px 0;">Date/Time</td><td style="font-weight: 600;">${data.preferredDate} at ${formatTime(data.preferredTime)}</td></tr>
                                      </table>
                                      ${data.message ? `<div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; font-style: italic; color: #444; font-size: 14px;">"${data.message}"</div>` : ''}
                                  </div>

                                  <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
                                      <a href="${createCalendarLink(data.preferredDate, data.preferredTime, data.sessionType)}" style="display: inline-block; background-color: #4285F4; color: #fff; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px; margin-bottom: 15px;">Add to Google Calendar</a>
                                      <br>
                                      <a href="https://fastlane-gamma.vercel.app" style="display: inline-block; color: #666; text-decoration: underline; font-size: 13px;">Return to Website</a>
                                  </div>
                              </div>
                              <div style="background-color: #f9f9f9; padding: 15px; text-align: center; color: #999; font-size: 11px; border-top: 1px solid #eee;">
                                  © 2026 Fastlane Agency. Lagos, Nigeria.
                              </div>
                          </div>
                      </body>
                      </html>`
                  });

                  // Admin Email (Professional Template)
                  await resend.emails.send({
                    from: 'Fastlane System <onboarding@resend.dev>',
                    to: 'ahmadishola12@gmail.com',
                    subject: 'New Fastlane Booking: ' + data.firstName + ' ' + data.lastName,
                    html: `
                      <!DOCTYPE html>
                      <html>
                      <body style="font-family: sans-serif; color: #111; line-height: 1.5; background-color: #f8f8f8; padding: 20px; margin: 0;">
                          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                              <div style="background-color: #000; color: #fff; padding: 25px; text-align: center;">
                                  <h1 style="font-size: 16px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">Admin Notification</h1>
                              </div>
                              <div style="padding: 40px;">
                                  <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 25px 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">New Booking Alert</h2>
                                  <div style="margin-bottom: 30px;">
                                      <p style="margin: 10px 0; font-size: 14px;"><strong>Client:</strong> ${data.firstName} ${data.lastName}</p>
                                      <p style="margin: 10px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a></p>
                                      <p style="margin: 10px 0; font-size: 14px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #0066cc;">${data.phone}</a></p>
                                  </div>
                                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                                      <p style="margin: 5px 0; font-size: 14px;"><strong>Session:</strong> ${data.sessionType}</p>
                                      <p style="margin: 5px 0; font-size: 14px;"><strong>Curriculum:</strong> ${data.curriculum}</p>
                                      <p style="margin: 5px 0; font-size: 14px;"><strong>Date:</strong> ${data.preferredDate} at ${formatTime(data.preferredTime)}</p>
                                  </div>
                                  ${data.message ? `<div style="margin-top: 25px;"><p style="font-weight: 700; font-size: 13px; color: #666; margin-bottom: 10px;">MESSAGE:</p><div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; font-style: italic; font-size: 14px;">"${data.message}"</div></div>` : ''}
                                  <div style="margin-top: 40px; text-align: center;">
                                      <a href="mailto:${data.email}" style="display: inline-block; background-color: #000; color: #fff; padding: 15px 35px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Reply to Client</a>
                                  </div>
                              </div>
                          </div>
                      </body>
                      </html>`
                  });

                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ message: 'Success' }));
                } catch (e) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Local API error' }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'framer-motion': ['framer-motion'],
            'icons': ['lucide-react', 'react-icons'],
            'radix-ui': ['@radix-ui/react-slot', 'embla-carousel-react', 'embla-carousel'],
          },
        },
      },
    },
  }
})
