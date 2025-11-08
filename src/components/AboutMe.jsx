import {Code, User, Briefcase} from 'lucide-react';

export const AboutMe = () =>{
    return (
    <section id='about' className='px-24 px-4 relative mb-24'>
        <div className='container mx-auto max-w-5xl'>

            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'> Me </span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold'>Passionate Web Developer and Tech Enthusiast</h3>

                    <p className='text-muted-foreground'>  Innovative Computer Science Engineering student with a strong academic record and practical experience in developing AI powered applications, real-time automation systems, and full-stack web solutions. Proficient in Python, Intermediate in MERN stack, and AI/ML frameworks with expertise in computer vision (YOLOv8). 
                    </p>

                    <p className='text-muted-foreground'>
                     Adept at designing and deploying scalable, secure, and data-driven applications, improving workflows by up to 95% efficiency
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href='#contact' className='cosmic-button'>
                            Contact Me
                        </a>
                        <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download CV
                        </a>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Code className='h-6 w-6 text-primary'/> 
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Web Development</h4>
                                <p className='text-muted-foreground'>This is a sample paragraph to test may code</p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <User className='h-6 w-6 text-primary'/> 
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Figma</h4>
                                <p className='text-muted-foreground'>This is a sample paragraph to test may code</p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Briefcase className='h-6 w-6 text-primary'/> 
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Python</h4>
                                <p className='text-muted-foreground'>This is a sample paragraph to test may code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
    );
};