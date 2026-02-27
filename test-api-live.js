const data = {
    firstName: 'Test',
    lastName: 'User',
    email: 'Halimgiwa@gmail.com',
    phone: '1234567890',
    curriculum: 'IB',
    sessionType: 'consultation',
    preferredDate: '2026-03-01',
    preferredTime: '14:00',
    message: 'Just testing the API from local node script!'
};

fetch('https://www.fastlanetutors.com/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(async res => ({ status: res.status, body: await res.text() }))
    .then(data => console.log('Response:', data))
    .catch(err => console.error('Fetch error:', err));
