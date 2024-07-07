import React from 'react'
import { Form } from 'react-router-dom'

// library
import { UserPlusIcon } from "@heroicons/react/24/solid"

// assets
import illustration from "../assets/illustration.jpg"
import sd from "../assets/sd.png"

export default function Intro() {
  return (
    <div className="intro">
        <div className="">
            <h1>
                Tracking <span className="accent">Your Money</span> made eZ
            </h1>
            <p>Don't waste it , invest it.</p>
            <Form method="post">
                <input type="text" name="userName" required
                placeholder="What is your name?" 
                aria-label="Your Name" autoComplete="given-name"/>
                <button type='submit' className='btn 
                btn--dark'>
                    <span>Create Account</span>
                    <UserPlusIcon width={20}/>
                </button>
            </Form>
            <img src={illustration} alt="" width={600} style={{backgroundColor:"transparent"}}/>
            {/* <img src={sd} alt="" width={600} style={{backgroundColor:"transparent"}}/> */}
        </div>
    </div>
  )
}