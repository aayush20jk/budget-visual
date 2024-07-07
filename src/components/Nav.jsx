// rrd imports
import { Form, NavLink } from 'react-router-dom'

// import library
import { TrashIcon } from '@heroicons/react/24/solid'

import React from 'react'
import logomark from "../assets/logomark.svg"

const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink 
            to="/"
            aria-label="Go to Home"
        >
            <img src={logomark} alt="" />
            <span>BudgetVisual</span>
        </NavLink>
        {
            userName && (
                <Form
                    method="post"
                    action="/logout"
                    onSubmit={(event)=>{
                        if(!confirm("delete user and all data"))
                            event.preventDefault()
                    }}
                >
                    <button type="submit" className='btn
                    btn--warning'>
                        <span>Delete User</span>
                        <TrashIcon width={20}/>
                    </button>
                </Form>
            )
        }
    </nav>
  )
}
export default Nav