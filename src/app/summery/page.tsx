"use client";

'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import Image from 'next/image'
import SummeryImg from '@/public/summery.png'
import { IoMdInformationCircle, IoMdClose } from "react-icons/io";

interface Plan {
    name: string
    features: string[]
}

interface MemberOption {
    members: number
    description: string
}

interface SwitchProps {
    checked: boolean
    onChange: (checked: boolean) => void
}

interface BillingOption {
    id: string
    title: string
    description: string
    price: number
    installment?: number
}

const plans: Plan[] = [
    {
        name: 'Choreless Unlimited+',
        features: [
            '250 lb / month family laundry base',
            'Always covered: Guaranteed weekly service',
            'Free pickup & delivery - we come to you',
            '20% savings on family care services'
        ]
    },
    {
        name: 'Choreless Unlimited',
        features: [
            '200 lb / month family laundry base',
            'Always covered: Guaranteed weekly service',
            'Free pickup & delivery - we come to you',
            '15% savings on family care services'
        ]
    }
]

const lbPerson = 200;
const perPerson = 250;

const memberOptions: MemberOption[] = [
    { members: 1, description: 'Perfect for individuals' },
    { members: 2, description: 'Perfect for couples' },
    { members: 3, description: 'Perfect families' },
    { members: 4, description: 'Perfect families' },
    { members: 5, description: 'Perfect families' }
]

const billingOptions: BillingOption[] = [
    {
        id: 'yearly',
        title: 'Yearly',
        description: 'Pay once get 3 month free',
        price: 1750,
    },
    {
        id: 'yearly-flex',
        title: 'Yearly with flex pay',
        description: 'Pay in 3 installment get 2 month free',
        price: 2000,
        installment: 666.66,
    },
]

const Switch = ({ checked, onChange }: SwitchProps) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleClick = () => {
        setIsChecked(!isChecked)
        onChange(!isChecked)
    }

    return (
        <div
            className={`w-9 h-4 flex items-center rounded-full cursor-pointer border border-white ${isChecked ? 'bg-gray-700' : 'bg-gray-300'
                }`}
            onClick={handleClick}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-5' : 'translate-x-0'
                    }`}
            ></div>
        </div>
    )
}


const SubscriptionPage: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[0])
    const [selectedMembers, setSelectedMembers] = useState<MemberOption>(memberOptions[0])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isYearlyModalOpen, setIsYearlyModalOpen] = useState(false)
    const [isYearly, setIsYearly] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string>(billingOptions[0].id)

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const handleOpen = () => {
        setIsModalOpen(true);
    }

    const handleYearlyClose = () => {
        setIsYearlyModalOpen(false);
    }

    const handleYearlyOpen = () => {
        setIsYearlyModalOpen(true);
    }

    const handlePlanChange = (checked: boolean) => {
        setIsYearly(checked)
        if (checked) handleYearlyOpen()
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex mx-auto lg:flex-row flex-col">
                <div className="flex justify-center lg:justify-end items-center text-center w-full">
                    <div className="lg:min-h-screen w-full lg:max-w-[530px] py-12 lg:py-8 px-4 sm:px-16">
                        <div className="w-full">
                            <header className="mb-8">
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h1 className="text-3xl font-bold">Choreless</h1>
                                </div>
                            </header>

                            <main className='text-left'>
                                <h2 className="text-3xl font-bold mb-2">Laundry Freedom at Your Fingertips</h2>
                                <p className="text-[16px] text-gray-600 mb-8">Choose your time-saving plan below</p>

                                <div className="space-y-2 mb-8">
                                    <div className="flex items-center">
                                        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</div>
                                        <span>Pay as you go</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</div>
                                        <span>Choreless unlimited</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</div>
                                        <span>Choreless Unlimited+</span>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <Image
                                        src={SummeryImg}
                                        alt="Laundry and Choreless bag"
                                        className="rounded-lg w-full lg:w-[80%] h-[200px] object-cover"
                                    ></Image>
                                </div>

                                <div className="bg-[#d8e4e4] py-3 pr-3 rounded-lg">
                                    <div className="flex items-center">
                                        <div className='px-3'>
                                            <IoMdInformationCircle size={36} />
                                        </div>
                                        <p className="text-[16px]">
                                            Transform your to-do list into quality time – let Choreless handle the laundry while you focus on what matters most.
                                        </p>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>

                <div className='bg-white px-4 sm:px-16 py-20 shadow-md w-full flex flex-col gap-8'>
                    <div className='border-b pb-8'>
                        <h3 className="text-xl font-semibold mb-4">Select your choreless plan</h3>
                        <p className="text-gray-600 mb-4">Choose your plan</p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full xl:w-[70%]">
                            {plans.map((plan) => (
                                <button
                                    key={plan.name}
                                    onClick={() => setSelectedPlan(plan)}
                                    className={`flex-1 py-2 px-4 rounded-full text-center ${selectedPlan.name === plan.name
                                        ? 'bg-[#85C6C0] text-white'
                                        : 'bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    {plan.name}
                                </button>
                            ))}
                        </div>
                        <ul className="space-y-3">
                            {selectedPlan.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <Check className="w-5 h-5 text-teal-500 mr-2" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-700 mb-4">Number of Members in your household</h3>
                        <div>
                            <div className='w-full flex flex-row bg-white rounded-md p-6 items-center justify-between border border-[#85C6C0]'
                                onClick={handleOpen}>
                                <button
                                    className="w-full text-left flex items-center justify-between"
                                >
                                    <div className='flex flex-col gap-2'>
                                        <span className="font-semibold">{selectedMembers.members} members</span>
                                        <p className="text-sm text-gray-600">{selectedMembers.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-semibold">${selectedMembers.members * perPerson} / mo</span>
                                        <p className="text-sm text-gray-600">{selectedMembers.members * lbPerson} lb - ∞</p>
                                    </div>
                                </button>
                                <ChevronDown className="w-5 h-5 text-gray-400 ml-4 hover:cursor-pointer" />
                            </div>
                            {isModalOpen && (
                                <div className='inset-0 bg-black bg-opacity-50 fixed flex items-center justify-center top-0 left-0 z-10 w-full h-full'ref={ref}>
                                    <div className="bg-white border border-gray-300 rounded-[24px] p-6 shadow-lg max-w-md h-auto" >
                                        <div className='flex items-center justify-between w-full'>
                                            <h1 className='font-bold'>Number of Member of your household</h1>
                                            <div className='hover:cursor-pointer rounded-full shadow-md p-1' onClick={handleClose}>
                                                <IoMdClose></IoMdClose>
                                            </div>
                                        </div>
                                        <p className='text-xs my-2'>Choose your family member</p>
                                        {memberOptions.map((option) => (
                                            <button
                                                key={option.members}
                                                onClick={() => {
                                                    setSelectedMembers(option)
                                                    handleClose();
                                                }}
                                                className="w-full text-left border-2 border-[#64c2e7] rounded-xl mt-4 p-4 hover:bg-gray-100"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span className="font-extrabold">{option.members} members</span>
                                                        <p className="text-sm text-gray-600 mt-2">{option.description}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-lg"><b className='font-extrabold'>${option.members * perPerson}</b> / mo</span>
                                                        <p className="text-sm text-gray-600 mt-2">${perPerson} / person</p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='mt-4 flex items-center justify-between'>
                            <div>
                                <p className="text-sm text-gray-600">
                                    <strong>${selectedMembers.members * perPerson}</strong> billed yearly for <strong>{selectedMembers.members} user</strong>
                                </p>
                                <p className='text-xs'>
                                    Pay in 4 installment of $3000 with Flex pay.
                                </p>
                            </div>
                            <Switch checked={isYearly} onChange={handlePlanChange}></Switch>
                            {isYearlyModalOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                                    <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full">
                                        <div className="flex flex-col">
                                            <div className='flex justify-between'>
                                                <h1 className='font-bold'>Save with yearly billing</h1>
                                                <button onClick={handleYearlyClose} className="text-gray-400 hover:text-gray-600">
                                                    <IoMdClose size={24} />
                                                </button>
                                            </div>
                                            <p className='text-xs my-2'>Choose one suitable for you</p>
                                        </div>
                                        <div>
                                            {billingOptions.map((option) => (
                                                <label
                                                    key={option.id}
                                                    className={`flex items-center justify-between p-4 border rounded-lg mb-4 cursor-pointer ${selectedOption === option.id ? 'border-blue-500' : 'border-gray-200'
                                                        }`}
                                                    onClick={handleYearlyClose}
                                                >
                                                    <div className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="billing-option"
                                                            value={option.id}
                                                            checked={selectedOption === option.id}
                                                            onChange={() => setSelectedOption(option.id)}
                                                            className="form-radio h-5 w-5 text-blue-600"
                                                        />
                                                        <div className="ml-4">
                                                            <div className="font-semibold">{option.title}</div>
                                                            <div className="text-sm text-gray-500">{option.description}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-semibold">${option.price} / year</div>
                                                        {option.installment && (
                                                            <div className="text-sm text-gray-500">${option.installment.toFixed(2)} / today</div>
                                                        )}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-700 mb-4">Payment method</h3>
                        <div className='w-full border border-gray-300 rounded-md px-4'>
                            <div className="flex justify-between items-center py-4 border-b">
                                <div className='flex flex-col gap-2'>
                                    <span>Unlimited+</span>
                                    <span>{selectedMembers.members} user / month</span>
                                </div>
                                <span>${selectedMembers.members * perPerson} / month</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b">
                                <span>Welcome discount</span>
                                <span className="text-teal-500">-$50</span>
                            </div>
                            <div className="flex justify-between items-center py-4">
                                <span>Total due today</span>
                                <span className='font-semibold'>${selectedMembers.members * perPerson - 50}</span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-md p-4 w-[60%]'>
                        Add your payment information
                    </div>

                    <div className="mb-8">
                        <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
                            Pay and start subscription
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-2">
                            Change, pause or cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPage