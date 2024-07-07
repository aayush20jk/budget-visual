import React from 'react'
import { Form } from 'react-router-dom'

// library imports
import { CurrencyRupeeIcon } from '@heroicons/react/24/solid'

export const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
        <h2 className="h3">
            Create budget
        </h2>

        <Form
            method='post'
            className='grid-sm'
        >
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input 
                    type="text" 
                    name="newBudget" 
                    id='newBudget'
                    placeholder='e.g. Bills' 
                    required
                />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgeAmount">Amount</label>
                <input 
                    type="number" 
                    step={100}
                    name='newBudgetAmount'
                    placeholder='e.g. Rs 3000'
                    required
                    inputMode='decimal'
                />
            </div>
            <button type='submit'
            className="btn btn--dark">
                <span>Creat Budget</span>
                <CurrencyRupeeIcon width={20}/>
            </button>

        </Form>
    </div>
  )
}