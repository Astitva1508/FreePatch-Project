import React from 'react'
import '../styles/input.css'

const Input = () => {
  return (
    <React.Fragment>
        <section class="input">
            <div class="input-group ">
                <input type="text" class="form-control" placeholder="Place product link" />
            </div>
            <div class="input-group order-btn">
                <button type="submit" class="link-btn">LOREM IPSUM</button>
                <button type="submit" class="link-btn">LOREM CONSECTETUR</button>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Input