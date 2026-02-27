const data = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    curriculum: 'IB',
    sessionType: 'consultation',
    preferredDate: '2026-03-01',
    preferredTime: '14:00',
    message: 'Just testing the API from local node script!'
};

fetch('http://localhost:5173/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(res => res.json().then(json => ({ status: res.status, body: json })))
    .then(data => console.log('Response:', data))
    .catch(err => console.error('Fetch error:', err));
