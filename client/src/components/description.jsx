import React from 'react'
import {Container} from 'react-bootstrap'
import '../styles/description.css'

const Description = () => {
  return (
    <React.Fragment>
        <section class="description">
            <Container fluid>
                <h2 class="description-title">
                    Lorem.Ipsum.Dolor
                </h2>
                <p class="description-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam adipisci cum amet velit, quo, temporibus quas voluptate est tempore eveniet perferendis! Repellat, harum.
                </p>
            </Container>
        </section>
    </React.Fragment>
  )}

export default Description