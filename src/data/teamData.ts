


export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface Certification {
    title: string;
    issuer: string;
    year: string;
}

export interface Social {
    platform: 'linkedin' | 'twitter' | 'instagram' | 'email';
    handle: string;
    url: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    roleColor: string;
    accentColor: string;
    bio: string;
    fullBio: string;
    image: string;
    tag: string;
    yearsExperience: number;
    studentsHelped: number;
    passRate: string;
    specialisms: string[];
    education: Education[];
    certifications: Certification[];
    socials: Social[];
    subjects: string[];
    quote: string;
    ambassador?: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 'halim-giwa',
        name: 'Halim Giwa',
        role: 'Senior Mathematics Tutor',
        roleColor: 'text-blue-400',
        accentColor: '#3b82f6',
        bio: 'For over a decade, I have prepared students for WAEC, JAMB, IGCSE, Checkpoint, and SAT exams using interactive tools like Khan Academy and custom worksheets. My focus is making Mathematics fun, practical, and exam‑oriented through real‑life problem‑solving.',
        fullBio: `Experienced exam coach making Mathematics fun, practical, and success‑driven for WAEC, JAMB, IGCSE, Checkpoint, and SAT learners\n\nI have over a decade of experience preparing students for WAEC, JAMB, IGCSE, Checkpoint, and SAT examinations. My teaching blends subject mastery with modern tools like Khan Academy and tailored worksheets that align with curriculum standards, ensuring students gain both understanding and confidence.\n\nMany of my learners have achieved outstanding results through this approach. My style is interactive, practical, and problem solving based, making Mathematics engaging and relevant to everyday life. By combining exam oriented strategies with curiosity driven learning, I help students transform anxiety into enjoyment, building independent thinkers ready for academic success and real world problem solving.`,
        image: '/Halim.jpeg',
        tag: 'Nigerian & British Curriculum',
        yearsExperience: 10,
        studentsHelped: 50,
        passRate: '87%',
        specialisms: ['Pure Mathematics', 'Further Maths', 'Statistics', 'WAEC/NECO', 'IGCSE', 'A-Level'],
        subjects: ['Mathematics', 'Further Mathematics', 'Statistics', 'Calculus'],
        quote: 'Turning Mathematics into fun, practical problem‑solving for exam success',
        ambassador: 'Commonwealth Education',
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
        fullBio: `I am an experienced Physics educator with a strong record of preparing students for high-stakes examinations through structured virtual coaching and targeted exam preparation strategies. Over the years, I have successfully supported learners preparing for West African Senior School Certificate Examination (WAEC), International General Certificate of Secondary Education (IGCSE), and A Level Physics, helping them master complex concepts, strengthen problem-solving skills, and achieve strong results in both national and international assessment pathways.\n\nMy teaching approach focuses on conceptual clarity, exam-focused practice, and simplified explanations of core Physics principles. Through virtual instruction, I guide students step-by-step in breaking down difficult topics, interpreting exam questions effectively, and applying scientific reasoning confidently during examinations. This approach has enabled many learners to build competence and succeed in rigorous Physics assessments across different curricula.`,
        image: '/Hamid.png',
        tag: 'Physics & General Science',
        yearsExperience: 9,
        studentsHelped: 16,
        passRate: '85%',
        specialisms: ['WAEC Physics', 'IGCSE Physics', 'A Level Physics', 'Virtual Coaching', 'Exam Prep'],
        subjects: ['Physics', 'General Science'],
        quote: 'My teaching philosophy is simple: meaningful relationships come before academic rigor, because students learn best when they feel supported, valued, and confident enough to engage with challenging ideas.',
        ambassador: 'Commonwealth Education',
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
    /*
    {
        id: 'adeleke-wasiu-adebisi',
        name: 'Adeleke Wasiu Adebisi',
        role: 'Experienced Coding, ICT & Computer Science Teacher',
        roleColor: 'text-cyan-400',
        accentColor: '#22d3ee',
        bio: 'Experienced ICT and Computer Science tutor with a passion for coding and digital literacy.',
        fullBio: `I am an ICT and Computer Science tutor with over a decade of experience teaching coding, digital literacy, and computational thinking. At Crescent Pearls Leadership Academy, I design and deliver engaging lessons that foster creativity, problem-solving, and hands-on learning. My teaching approach emphasizes project-based learning, ensuring students apply knowledge through coding challenges and real-world projects. Previously, at Noble Guide Academy, I integrated technology into the curriculum and supported students in mastering ICT fundamentals. I am committed to helping learners build confidence in technology and achieve academic success.`,
        image: '/Wasiu.jpg',
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
    },
    */
    /*
    {
        id: 'boluwatito-adebamiro',
        name: 'Boluwatito Adebamiro',
        role: 'English and Literature Tutor',
        roleColor: 'text-emerald-400',
        accentColor: '#34d399',
        bio: 'Experienced English and Literature educator delivering strong results in WAEC, IGCSE, and Cambridge curricula. Focused on building critical thinking, communication, and creative expression through engaging teaching.',
        fullBio: `I am an experienced English educator with a strong background in teaching WAEC, IGCSE, and Cambridge Checkpoint curricula. I design engaging, student-centered lessons that strengthen reading, writing, and critical thinking, with a consistent record of excellent academic outcomes, including a 100% pass rate in external examinations and high-performing IGCSE Literature results. I have also prepared students for JAMB, with scores reaching as high as 308, reflecting my commitment to academic excellence.\n\nMy teaching style is interactive and inclusive, focused on developing confident communicators. I emphasize critical analysis, structured writing, and real-world application, creating a supportive environment where learners are encouraged to think independently and express themselves effectively. I also extend learning beyond the classroom by mentoring students in writing and performance, helping them build creativity, confidence, and a deeper appreciation for language and literature.`,
        image: '/Adebamiro.jpeg',
        tag: 'English & Literature',
        yearsExperience: 6,
        studentsHelped: 200,
        passRate: '70%+',
        specialisms: ['WAEC English', 'IGCSE English', 'Cambridge Checkpoint', 'Literature in English', 'JAMB English', 'Creative Writing'],
        subjects: ['English Language', 'Literature in English'],
        quote: 'My teaching philosophy is centered on nurturing curiosity, building confidence, and guiding learners to think critically and express themselves effectively through supportive and engaging instruction.',
        education: [
            {
                degree: 'Master of Arts (Literature-in-English)',
                institution: 'National Open University of Nigeria',
                year: 'Ongoing',
            },
            {
                degree: 'B.A. (Ed) English',
                institution: 'University of Ilorin',
                year: '2019',
            },
        ],
        certifications: [
            {
                title: 'Teaching License',
                issuer: 'Teachers’ Registration Council of Nigeria (TRCN)',
                year: '2019',
            },
            {
                title: 'Teaching English as a Foreign Language (TEFL)',
                issuer: 'World TESOL Academy',
                year: '2023',
            },
            {
                title: 'Teaching English to Speakers of Other Languages (TESOL)',
                issuer: 'World TESOL Academy',
                year: '2023',
            },
            {
                title: 'Content and Language Integrated Learning (CLIL)',
                issuer: 'British Council',
                year: '2022',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'boluwatito-adebamiro', url: 'https://linkedin.com/in/boluwatito-adebamiro' },
            { platform: 'twitter', handle: '@BoluAde', url: 'https://twitter.com/BoluAde' },
            { platform: 'email', handle: 'boluwatito@fastlane.ng', url: 'mailto:boluwatito@fastlane.ng' },
        ],
    },
    */
    {
        id: 'olowo-hafsoh-ashabi',
        name: 'Olowo Hafsoh Ashabi',
        role: 'Literacy Expert',
        roleColor: 'text-purple-400',
        accentColor: '#a855f7',
        bio: 'I am an experienced primary school teacher with over ten years of teaching engaging Literacy lessons, helping learners build strong reading, writing, and comprehension skills. I focus on raising independent learners through structured teaching, creative storytelling, and practical use of language.',
        fullBio: `I have been teaching in primary school for over ten years, mainly handling Literacy across lower and upper classes. Over time, I have worked closely with pupils who are still developing their reading and writing skills, so I focus a lot on breaking lessons down into simple, clear steps. I enjoy using stories, class discussions, and practical examples to help pupils understand better and feel confident to express themselves.\n\nIn my experience, I have helped many learners improve their comprehension, writing, and ability to organise their ideas, especially when preparing for assessments. I pay attention to building independence in my pupils by guiding them and gradually allowing them to take ownership of their learning. Beyond the classroom, I have also been involved in activities like running a cooking club and supporting lesson planning within my team. My aim is always to raise learners who can think for themselves and use language effectively in real-life situations.`,
        image: '/Olowo.jpg',
        tag: 'Literacy & Primary Education',
        yearsExperience: 10,
        studentsHelped: 100,
        passRate: '80-95%',
        specialisms: ['Reading Comprehension', 'Creative Writing', 'Phonics & Literacy', 'Primary Education', 'Storytelling'],
        subjects: ['Literacy', 'English Language'],
        quote: 'No child is dull; every learner simply needs the right guidance and teaching approach to succeed.',
        education: [
            {
                degree: 'Master of Public Administration (MPA)',
                institution: 'Ahmadu Bello University',
                year: 'In View',
            },
            {
                degree: 'Postgraduate Diploma in Education (PGDE)',
                institution: 'National Teachers’ Institute',
                year: '2015',
            },
            {
                degree: 'Higher National Diploma (HND), Public Administration',
                institution: 'Kwara State Polytechnic',
                year: '2015',
            },
        ],
        certifications: [
            {
                title: 'Teachers Registration Council of Nigeria (TRCN) Certification',
                issuer: 'TRCN',
                year: '',
            },
            {
                title: 'Internal Examination Assessment and Marking',
                issuer: 'School-based assessments',
                year: '',
            },
            {
                title: 'Continuous Professional Development (CPD) in Literacy Instruction',
                issuer: 'Primary Education',
                year: '',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'olowo-hafsoh', url: 'https://linkedin.com/in/olowo-hafsoh' },
            { platform: 'email', handle: 'olowo@fastlane.ng', url: 'mailto:olowo@fastlane.ng' },
        ],
    },
    {
        id: 'amina-ibrahim',
        name: 'Amina Ibrahim',
        role: 'English Language Tutor',
        roleColor: 'text-pink-400',
        accentColor: '#f472b6',
        bio: 'I am a dedicated educator with strong expertise in student-centered teaching, classroom management, and effective communication. My focus is on nurturing critical thinking and personal growth.',
        fullBio: `I am a passionate and dedicated educator with a strong background in teaching and supporting diverse learners. My teaching style is student-centered, combining empathy, patience, and structured guidance to create an engaging and inclusive classroom environment. I prioritize clear communication and active participation, ensuring that students not only understand concepts but also develop confidence in expressing their ideas. I am skilled in adapting lessons to suit different learning needs, using practical examples and interactive methods to make learning meaningful and impactful.\n\nThroughout my experience, I have successfully managed classrooms, supported individual student growth, and contributed to building positive learning environments. I have taken on leadership roles within teams, demonstrating strong organizational and multitasking abilities. My achievements include improving student engagement, fostering collaboration, and helping learners achieve their academic goals. I remain committed to continuous learning and professional development, with a focus on delivering quality education that inspires long-term growth and success.`,
        image: '/Ibrahim.jpg',
        tag: 'English Language',
        yearsExperience: 10,
        studentsHelped: 100,
        passRate: '99%',
        specialisms: ['Student-Centered Teaching', 'Classroom Management', 'Effective Communication', 'IGCSE English', 'Speaking Examiner'],
        subjects: ['English Language'],
        quote: 'My philosophy is to create a supportive learning space, where every student feels seen, heard and empowered.',
        education: [
            {
                degree: 'B.A English',
                institution: 'University of Ilorin',
                year: '2003',
            },
        ],
        certifications: [
            {
                title: 'Post Graduate Diploma in Education (PGDE)',
                issuer: 'PGDE',
                year: '',
            },
            {
                title: 'IGCSE English as a First Language Certificate',
                issuer: 'Cambridge',
                year: '',
            },
            {
                title: 'Teacher’s Registration Council of Nigeria (TRCN)',
                issuer: 'TRCN',
                year: '',
            },
            {
                title: 'IGCSE English As a Second Language Speaking Examiner',
                issuer: 'Cambridge',
                year: '',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'amina-ibrahim', url: 'https://linkedin.com/in/amina-ibrahim' },
            { platform: 'email', handle: 'amina@fastlane.ng', url: 'mailto:amina@fastlane.ng' },
        ],
    },
    {
        id: 'ajimoh-adeuja',
        name: 'Ajimoh Adefowora Adeuja',
        role: 'Senior English Language Tutor',
        roleColor: 'text-indigo-400',
        accentColor: '#818cf8',
        bio: 'I am a dedicated language education scholar and English language educator with expertise in reading comprehension, metacognitive strategies, and curriculum design.',
        fullBio: `I hold a Doctor of Philosophy in Language Education from the University of Ibadan, with advanced training in Teacher Education, English & Communication, and Language Arts. I am experienced in delivering effective, learner-centred instruction across secondary school settings, while fostering academic excellence and literacy development.\n\nI have been teaching English language for ten years now in various secondary schools and my students perform excellently in any external examinations. Also, I have actively engaged in research, scholarly publications, and professional development through conferences and academic associations.`,
        image: '/Ajimoh.jpg',
        tag: 'English & Language Education',
        yearsExperience: 10,
        studentsHelped: 100,
        passRate: '90%',
        specialisms: ['Reading Comprehension', 'Metacognitive Strategies', 'Curriculum Design', 'Teacher Education', 'Language Arts'],
        subjects: ['English Language', 'Language Arts'],
        quote: 'Every student has a potential to be unlocked by a teacher and that is why I make sure I study my students and discover their true potentials.',
        education: [
            {
                degree: 'Doctor of Philosophy (PhD), Language Education',
                institution: 'University of Ibadan',
                year: '2024',
            },
            {
                degree: 'Masters of Education, Language Education',
                institution: 'University of Ibadan',
                year: '2017',
            },
            {
                degree: 'Bachelor of Education (B.Ed), Teacher Education & English & Communication',
                institution: 'University of Ibadan',
                year: '2014',
            },
        ],
        certifications: [
            {
                title: 'Teachers Registration Council of Nigeria (Member)',
                issuer: 'TRCN',
                year: '',
            },
            {
                title: 'International Association of Language Educators (Member)',
                issuer: 'IALE',
                year: '',
            },
        ],
        socials: [
            { platform: 'linkedin', handle: 'ajimoh-adeuja', url: 'https://linkedin.com/in/ajimoh-adeuja' },
            { platform: 'email', handle: 'ajimoh@fastlane.ng', url: 'mailto:ajimoh@fastlane.ng' },
        ],
    }
];
