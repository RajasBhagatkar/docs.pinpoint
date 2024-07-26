import React, { Dispatch, FormEventHandler, SetStateAction, useState } from 'react'
import axios from 'axios';


export default function ContactForm() {
    const [modal, setModal] = useState<boolean>(true);


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const jsonData = Object.fromEntries(formData.entries())
            e.currentTarget.reset();

            const payload = {
                chat_id: "-1001942724016",
                text: `New Message From PinPoint \n\nFrom: ${jsonData.email}\nSubject: ${jsonData.subject}\n\nMessage: ${jsonData.message} `,
                parse_mode: "HTML",
                message_thread_id: 91
            };
            const url = `https://api.telegram.org/bot2118270714:AAHYBvs4QkieMmfn1n3KDQhZ0_Y5g8biW_U/sendMessage`
            const resposne = await axios.post(url, payload)
            setModal(true);

        } catch (e: any) {
            console.log(e.response.data)
        }
    }


    return (
        <div>
            <section className="bg-white dark:bg-[#09090b] mt-6 rounded-lg">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                                placeholder="name@flowbite.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 shadow-sm   dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light focus:outline-none"
                                // className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                                placeholder="Let us know how we can help you"
                                name='subject'
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                // className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border border-gray-300 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-primary focus:outline-none"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                                placeholder="Leave a comment..."
                                name='message'
                            />
                        </div>
                        <button
                            type="submit"
                            className="h-10 px-4 py-2 text-sm font-medium text-center text-zinc-900 outline-zinc-900 rounded bg-slate-50 sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-zinc-950 dark:bg-slate-50 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>

            {modal && <Modal setModal={setModal} />}
        </div>
    )
}
type ModalProps = {
    setModal: Dispatch<SetStateAction<boolean>>
}

export function Modal({ setModal }: ModalProps) {
    return (
        <div
            id="popup-modal"
            tabIndex={-1}
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
            aria-modal="true"
            role="dialog"
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        type="button"
                        className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={() => setModal(false)}
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">

                        <span className='flex justify-center my-3'>

                            <svg fill="green" width="3rem" height="3rem" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title />
                                <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z" />
                            </svg>
                        </span>

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Message Successfully Sent!
                        </h3>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white hover:border-gray-300  hover:bg-zinc-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                            onClick={() => setModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>



    )
}
