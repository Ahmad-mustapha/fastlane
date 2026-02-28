import 'dotenv/config';
import { Resend } from 'resend';

async function run() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('No RESEND_API_KEY found in .env');
        return;
    }

    const resend = new Resend(apiKey);
    console.log('Testing with API Key:', apiKey.substring(0, 7) + '...');

    // Testing the exact 'from' address from the API
    const from = 'Fastlane <hello@fastlanetutors.com>';
    const to = 'Halimgiwa@gmail.com';

    console.log(`Attempting to send from "${from}" to "${to}"...`);

    const result = await resend.emails.send({
        from: from,
        to: to,
        subject: 'TEST: Validation Check',
        html: '<p>This is a test to verify if the domain is authorized on this Resend account.</p>'
    });

    if (result.error) {
        console.log('--- FAILED ---');
        console.log('Error Name:', result.error.name);
        console.log('Error Message:', result.error.message);
        console.log('Status Code:', result.error.statusCode);
    } else {
        console.log('--- SUCCESS ---');
        console.log('Message ID:', result.data.id);
    }
}

run();
