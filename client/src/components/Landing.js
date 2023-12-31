import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'



export default function Landing( { setId } ) {
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    setId(false)
    async function getQuizzesData() {
      try {
        const { data } = await axios('/api/quizzes')
        setQuizzes(data)
      } catch (error) {
        console.log(error)
      }
    }
    getQuizzesData()
  }, [])


  return (
    <section>
      <main>
        <section className='wrap-carousel'>
          <h1 className="title text-center text-uppercase mb-5">Sei Quiz App</h1>
          <Carousel
            interval={1000}
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon change" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon change" />}
          >
            {quizzes.map(({ title, icon, _id }, i) =>
              <Carousel.Item key={i}>
                <div className='display-category' >
                  <Carousel.Caption>
                    <h3>{title}</h3>
                  </Carousel.Caption>
                  <Link to={`/quizzes/${_id}`}>
                    <img alt={title} src={icon} />
                  </Link>
                </div>
                <div className='add-question'>
                  <Link to={`/quizzes/${_id}/questions`} className='link-btn'>
                    <div >
                      <Carousel.Caption>
                        <button type='button' className='btn btn-sm col-3 d-block m-auto mt-2'>Add Question</button>
                      </Carousel.Caption>
                    </div>
                  </Link>
                </div>
              </Carousel.Item>
            )}
          </Carousel>
        </section>
      </main>
    </section>
  )
}
