const fs = require('fs');
const fileContent = fs.readFileSync('src/data/teamData.ts', 'utf8');

// Find the start of the array
const arrayStart = fileContent.indexOf('export const teamMembers: TeamMember[] = [');
if (arrayStart === -1) {
    console.error('Array start not found');
    process.exit(1);
}

const bracketIndex = fileContent.indexOf('[', arrayStart);
const beforeArray = fileContent.substring(0, bracketIndex + 1);

const newTeamMembers = `
    {
        id: 'halim-giwa',
        name: 'Halim Giwa',
        role: 'Senior Mathematics Tutor',
        roleColor: 'text-blue-400',
        accentColor: '#3b82f6',
        bio: 'For over a decade, I have prepared students for WAEC, JAMB, IGCSE, Checkpoint, and SAT exams using interactive tools like Khan Academy and custom worksheets. My focus is making Mathematics fun, practical, and exam‑oriented through real‑life problem‑solving.',
        fullBio: \`Experienced exam coach making Mathematics fun, practical, and success‑driven for WAEC, JAMB, IGCSE, Checkpoint, and SAT learners\\n\\nI have over a decade of experience preparing students for WAEC, JAMB, IGCSE, Checkpoint, and SAT examinations. My teaching blends subject mastery with modern tools like Khan Academy and tailored worksheets that align with curriculum standards, ensuring students gain both understanding and confidence.\\n\\nMany of my learners have achieved outstanding results through this approach. My style is interactive, practical, and problem solving based, making Mathematics engaging and relevant to everyday life. By combining exam oriented strategies with curiosity driven learning, I help students transform anxiety into enjoyment, building independent thinkers ready for academic success and real world problem solving.\`,
        image: AboutImg,
        tag: 'Nigerian & British Curriculum',
        yearsExperience: 10,
        studentsHelped: 50,
        passRate: '87%',
        specialisms: ['Pure Mathematics', 'Further Maths', 'Statistics', 'WAEC/NECO', 'IGCSE', 'A-Level'],
        subjects: ['Mathematics', 'Further Mathematics', 'Statistics', 'Calculus'],
        quote: 'Turning Mathematics into fun, practical problem‑solving for exam success',
        education: [
            {
                degree: 'B.Sc Biochemistry (SLT)',
                institution: '',
                year: '',
            },
            {
                degree: 'PGDE',
                institution: 'NTI',
                year: '',
            },
            {
                degree: 'TRCN',
                institution: '',
                year: '',
            },
        ],
        certifications: [
            {
                title: 'TRCN',
                issuer: 'Teachers Registration Council of Nigeria',
                year: '',
            },
            {
                title: 'Being a professional teacher',
                issuer: 'Teach 2030',
                year: '',
            },
            {
                title: 'Independent learning',
                issuer: 'Teach 2030',
                year: '',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'halim-giwa', url: 'https://linkedin.com/in/halim-giwa' },
            { platform: 'twitter', handle: '@HalimGiwa', url: 'https://twitter.com/HalimGiwa' },
            { platform: 'email', handle: 'halim@fastlane.ng', url: 'mailto:halim@fastlane.ng' },
        ],
    },
    {
        id: 'hamid-giwa',
        name: 'Hamid Giwa',
        role: 'Senior Physics Tutor',
        roleColor: 'text-orange-400',
        accentColor: '#fb923c',
        bio: 'Experienced Physics educator with a strong record of preparing students for WAEC, IGCSE, and A Level Physics through structured virtual coaching.',
        fullBio: \`I am an experienced Physics educator with a strong record of preparing students for high-stakes examinations through structured virtual coaching and targeted exam preparation strategies. Over the years, I have successfully supported learners preparing for West African Senior School Certificate Examination (WAEC), International General Certificate of Secondary Education (IGCSE), and A Level Physics, helping them master complex concepts, strengthen problem-solving skills, and achieve strong results in both national and international assessment pathways.\\n\\nMy teaching approach focuses on conceptual clarity, exam-focused practice, and simplified explanations of core Physics principles. Through virtual instruction, I guide students step-by-step in breaking down difficult topics, interpreting exam questions effectively, and applying scientific reasoning confidently during examinations. This approach has enabled many learners to build competence and succeed in rigorous Physics assessments across different curricula.\`,
        image: HeroImg,
        tag: 'Physics & General Science',
        yearsExperience: 9,
        studentsHelped: 16,
        passRate: '85%',
        specialisms: ['WAEC Physics', 'IGCSE Physics', 'A Level Physics', 'Virtual Coaching', 'Exam Prep'],
        subjects: ['Physics', 'General Science'],
        quote: 'My teaching philosophy is simple: meaningful relationships come before academic rigor, because students learn best when they feel supported, valued, and confident enough to engage with challenging ideas.',
        education: [
            {
                degree: 'B.sc. Physics/Electronics',
                institution: 'Ekiti State University',
                year: '2016',
            },
        ],
        certifications: [
            {
                title: 'Certified UNESCO Digital Educator',
                issuer: 'UNESCO',
                year: '',
            },
            {
                title: 'TRCN',
                issuer: 'Teachers Registration Council of Nigeria',
                year: '',
            },
            {
                title: 'Engaging with assessment for learning',
                issuer: 'British Council Partner School',
                year: '',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'hamid-giwa', url: 'https://linkedin.com/in/hamid-giwa' },
            { platform: 'twitter', handle: '@HamidGiwa', url: 'https://twitter.com/HamidGiwa' },
            { platform: 'email', handle: 'hamid@fastlane.ng', url: 'mailto:hamid@fastlane.ng' },
        ],
    },
    {
        id: 'rayhanah-kolawole',
        name: 'Rayhanah Kolawole',
        role: 'Senior English Tutor',
        roleColor: 'text-purple-400',
        accentColor: '#a855f7',
        bio: 'I specialize in teaching English and helping students build strong reading and writing skills. My focus is on clear understanding, critical thinking, and exam success.',
        fullBio: \`I am an experienced English teacher with a strong background in teaching both primary and secondary school students. I have worked with learners from different academic systems, helping them build strong foundations in reading, writing, comprehension, and critical thinking. I support students preparing for school and external examinations through structured lessons, diagnostic assessments, and targeted practice that builds both confidence and competence.\\n\\nMy teaching style is clear, supportive, and engaging, focusing on helping students truly understand concepts rather than simply memorize them. I use guided instruction, discussion, and practical exercises to strengthen language skills and encourage independent thinking. I also work effectively with international students, helping them adapt to different curricula and develop the language skills needed to succeed academically and communicate confidently.\`,
        image: AboutImg,
        tag: 'English & Literature',
        yearsExperience: 22,
        studentsHelped: 100,
        passRate: '94%',
        specialisms: ['English Education', 'Reading & Writing Skills', 'Primary & Secondary Education', 'Exam Prep'],
        subjects: ['English', 'Literature'],
        quote: 'Every student learns best when lessons are clear, engaging, and tailored to their individual strengths, fostering both understanding and confidence.',
        education: [
            {
                degree: 'N. C. E English education',
                institution: 'LASUED (AOCOED)',
                year: '',
            },
            {
                degree: 'B. A in English Studies',
                institution: 'LASU',
                year: '',
            },
        ],
        certifications: [
            {
                title: 'Cambridge in FLE and ESL IGCSE',
                issuer: 'Cambridge',
                year: '',
            },
            {
                title: 'TEFL',
                issuer: 'TEFL',
                year: '',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'rayhanah-kolawole', url: 'https://linkedin.com/in/rayhanah-kolawole' },
            { platform: 'twitter', handle: '@RayhanahK', url: 'https://twitter.com/RayhanahK' },
            { platform: 'email', handle: 'rayhanah@fastlane.ng', url: 'mailto:rayhanah@fastlane.ng' },
        ],
    },
    {
        id: 'adeleke-wasiu-adebisi',
        name: 'Adeleke Wasiu Adebisi',
        role: 'Experienced Coding, ICT & Computer Science Teacher',
        roleColor: 'text-cyan-400',
        accentColor: '#22d3ee',
        bio: 'Experienced ICT and Computer Science tutor with a passion for coding and digital literacy.',
        fullBio: \`I am an ICT and Computer Science tutor with over a decade of experience teaching coding, digital literacy, and computational thinking. At Crescent Pearls Leadership Academy, I design and deliver engaging lessons that foster creativity, problem-solving, and hands-on learning. My teaching approach emphasizes project-based learning, ensuring students apply knowledge through coding challenges and real-world projects. Previously, at Noble Guide Academy, I integrated technology into the curriculum and supported students in mastering ICT fundamentals. I am committed to helping learners build confidence in technology and achieve academic success.\`,
        image: HeroImg,
        tag: 'ICT & Computer Science',
        yearsExperience: 12,
        studentsHelped: 500,
        passRate: '82%',
        specialisms: ['Coding', 'Digital Literacy', 'Computational Thinking', 'Project-Based Learning'],
        subjects: ['Computer Science', 'ICT', 'Coding'],
        quote: 'Technology education is the key to unlocking creativity and innovation in every learner.',
        education: [
            {
                degree: 'M.Sc Information Technology (In-view)',
                institution: 'National Open University',
                year: '',
            },
            {
                degree: 'B.Sc Computer Science',
                institution: 'Tai Solarin University of Education',
                year: '2012',
            },
        ],
        certifications: [
            {
                title: 'Cambridge IGCSE (0478) – Certificate of Completion',
                issuer: 'Cambridge',
                year: '',
            },
            {
                title: 'Google for Education – Certified Educator',
                issuer: 'Google',
                year: '',
            },
            {
                title: 'Teacher Registration Council of Nigeria',
                issuer: 'TRCN',
                year: '',
            },
            {
                title: 'British Council – CLIL, Engaging with Assessment for Learning',
                issuer: 'British Council',
                year: '',
            },
            {
                title: 'Data Analyst with Python',
                issuer: 'Datacamp',
                year: '',
            },
            {
                title: 'Cisco Networking Support Technician',
                issuer: 'Network Academy',
                year: '',
            },
            {
                title: 'Microsoft Azure Fundamentals',
                issuer: 'Microsoft',
                year: '',
            },
            {
                title: 'Cyber Security Analyst (Level 3)',
                issuer: 'CPN',
                year: '',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'adeleke-wasiu', url: 'https://linkedin.com/in/adeleke-wasiu' },
            { platform: 'twitter', handle: '@AdelekeWasiu', url: 'https://twitter.com/AdelekeWasiu' },
            { platform: 'email', handle: 'wasiu@fastlane.ng', url: 'mailto:wasiu@fastlane.ng' },
        ],
    }
];
`;

fs.writeFileSync('src/data/teamData.ts', beforeArray + newTeamMembers);
console.log('Successfully updated teamData.ts');
