import { Mail, Phone, MapPin} from "lucide-react";


export const ContactSection = () =>{
    return (<section id='contact' className='py-24 px-24 relative bg-secondary/30 '>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-center text-4xl font-bold mb-4'>
                Get In <span className='text-primary'> Touch </span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in our mind and want to collaborate? Feel free to reach out to me. I'm always open to discussing new oppurtunies.
            </p>
            <div className='grid grid-cols-1 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6 text-center'>
                        Contact Information
                    </h3>
                    <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-semibold mb-1'>Email</h4>
                                <a href='mailto:suhel.shaikhmohammad786@gmail.com'
                                className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                                    suhel.shaikhmohammad786@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-semibold mb-1'>Phone</h4>
                                <a href='tel:+918097253857'
                                className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                                    +91 8097253857
                                </a>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-semibold mb-1'>Location</h4>
                                <p className='text-muted-foreground text-sm'>
                                    Karnataka, India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};