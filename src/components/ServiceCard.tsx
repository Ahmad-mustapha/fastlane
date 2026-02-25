import { memo } from 'react';

interface ServiceCardProps {
    label: string;
    title: string;
    description: string;
    bgColor?: string;
}

const ServiceCard = memo(({ label, title, description, bgColor = 'bg-blue' }: ServiceCardProps) => {
    const bgStyles = {
        'bg-blue': 'bg-[#194070]',
        'bg-grey': 'bg-[#fff]',
        'bg-yellow': 'bg-[#2E9D41]'
    }[bgColor] || 'bg-[#194070]';

    const iconBg = bgColor === 'bg-blue' ? 'bg-white !text-[#194070]' : 'bg-black text-white';

    return (
        <div
            className={`relative h-[280px] w-full ${bgStyles} group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)' }}
        >
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Content Top */}
                <div className="flex flex-col">
                    <div className="inline-block px-4 py-1.5 rounded-full text-[0.7rem] font-bold tracking-[0.05em] bg-white/30 w-fit mb-6 opacity-80 text-gray-900">
                        {label}
                    </div>
                    <h2 className="text-[1.3rem] font-medium leading-[1.1] uppercase text-black">
                        {title}
                    </h2>
                </div>

                {/* Content Bottom */}
                <div className="flex flex-col relative">
                    <p className="text-[0.9rem] leading-relaxed mb-6 max-w-[80%] text-black">
                        {description}
                    </p>

                    {/* Bottom arrow icon */}
                    <div className={`absolute bottom-0 right-0 w-14 h-14 rounded-full flex items-center justify-center ${iconBg}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ServiceCard;
