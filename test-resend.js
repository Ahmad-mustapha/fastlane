import 'dotenv/config';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
    console.log('Sending test email...');
    const { data, error } = await resend.emails.send({
        from: 'Fastlane <hello@fastlanetutors.com>',
        to: 'Halimgiwa@gmail.com', // Sending to the admin just to see if it works
        subject: 'Test Email Direct From Script',
        html: '<p>Testing Resend configuration.</p>'
    });

    if (error) {
        console.error('RESEND ERROR:', JSON.stringify(error, null, 2));
    } else {
        console.log('SUCCESS, Email ID:', data?.id);
    }
}

testEmail();
