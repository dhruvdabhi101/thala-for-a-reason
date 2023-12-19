"use client";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'


export default function Home() {
    const [text, setText] = useState('')
    const [isThala, setIsThala] = useState(false)

    const checkThala = () => {
        if (text.length === 7) {
            setIsThala(true)
            console.log(text)
        } else {
            setIsThala(false)
            console.log('not thala')
        }
    }

    return (
        <main className="flex flex-col items-center justify-center gap-6 p-24">
            <div className='flex flex-col items-center justify-center gap-4'>
                <Input placeholder="Enter Word" className='w-72' onChange={(e) => setText(e.target.value)} />
                <Button onClick={checkThala}> Thala </Button>
            </div>

            {isThala &&
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='flex flex-col items-center justify-center gap-4 text-black font-bold text-4xl'>
                        Thala For a Reason
                    </div>
                    <video autoPlay loop style={{ width: '500px', height: '500px' }}>
                        <source src="thala.mp4" type='video/mp4' />
                    </video>
                </div>
            }
        </main>
    )
}
