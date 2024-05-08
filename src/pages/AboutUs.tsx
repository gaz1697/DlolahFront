import { z } from 'zod';
import { Mail, User, MessageSquareText } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import React from 'react';


const formSchema = z.object({
    name: z.string().nonempty().regex(/^[a-zA-Z]+$/),
    email: z.string().email().nonempty(),
    title: z.string().nonempty(),
    message: z.string().nonempty()
});

const Hero = () => {
    return (
        <div className='my-16 flex  flex-col items-center justify-center text-center'>
            <h1 className='text-4xl font-semibold text-primary'>
                About Us
            </h1>
            <h3 className='text-black'>
                Know everything with dlolah
            </h3>

            <p className='mt-4 max-w-sm text-justify text-sm text-secondary transition-all duration-300 md:max-w-md lg:max-w-4xl'>
                Welcome to the AI Help Desk at CCSIT, your 24/7
                assistant designed to guide students and newcomers
                through the exciting journey of college life. Our
                intelligent platform provides instant answers to your
                academic queries, facilitates navigation through
                college services, and connects you with the right
                resources tailored to your needs. Embrace the ease of
                personalized support for a seamless educational
                experience. We're here to help you every step of the
                way, ensuring your success is always at the forefront.
            </p>
        </div>
    );
};

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            name: '',
            email: '',
            title: '',
            message: ''
        },
        resolver: zodResolver(formSchema)
    });

    const onSubmit: SubmitHandler<
        z.infer<typeof formSchema>
    > = data => {
        console.log(data);
    };

    return (
        <div className='h-full bg-primary py-12'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-4xl font-semibold text-white'>
                    Contact Us
                </h1>
                <h3 className='text-white'>Get in touch with us</h3>
            </div>

            <form
                className='mx-auto my-8 flex max-w-sm flex-col items-center gap-4 rounded text-sm'
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className={classNames('input-rounded input flex w-full items-center gap-2 text-sm', {'input-error': errors.name})}>
                    <User className='h-4 w-4 text-primary ' />
                    <input
                        type='text'
                        className='grow'
                        placeholder='Name'
                        {...register('name')}
                    />
                </label>
                <label className={classNames('input-rounded input flex w-full items-center gap-2 text-sm', {'input-error': errors.email})}>
                    <Mail className='h-4 w-4 text-primary ' />
                    <input
                        type='text'
                        className='grow'
                        placeholder='Email'
                    />
                </label>
                <label className={classNames('input-rounded input flex w-full items-center gap-2 text-sm', {'input-error': errors.title})}>
                    <MessageSquareText className='h-4 w-4 text-primary ' />
                    <input
                        type='text'
                        className='grow'
                        placeholder='Title'
                    />
                </label>
                <textarea
                    className={classNames('w-full textarea', {'textarea-error': errors.message})}
                    placeholder='Message'
                ></textarea>
                <button className='w-full rounded border border-transparent bg-white py-2 font-bold text-primary duration-300 hover:border-white hover:bg-opacity-0 hover:text-white'>
                    {isSubmitting ? (
                        <span className='loading mt-1 h-4 w-4' />
                    ) : (
                        'Submit Message'
                    )}
                </button>
            </form>
        </div>
    );
};

const AboutUs = () => {
    return (
        <main className=''>
            <Hero />
            <ContactUs />
        </main>
    );
};

export default AboutUs;
