import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import authContext from '../stores/authContext'

export default function Guides() {
  const { user, authReady, login } = useContext(authContext)
  const { guides, setGuides } = useState(null)
  const { error, setError } = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
        .then(res => {
          if (!res.ok) {
            login()
            throw Error('You must login to be able to see the content')
          }
          return res.json()
        })
        .then(data => {
          setError(null)
          setGuides(data)
        })
        .catch(err => {
          setError(err.message)
          setGuides(null)
        })
    }
  }, [user, authReady])

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides && guides.map(guide => (
        <div key={guide.title} className={styles.card} >
          <h3>{guide.title}</h3>
          <h4>Written by {guide.author}</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tempora dignissimos dolorem, omnis magnam, alias quod hic pariatur quo porro ipsa rerum laudantium id! Consequuntur praesentium consectetur alias voluptatum optio quaerat cupiditate. Cupiditate, in. Reprehenderit tempora cumque deleniti maiores tempore earum rem optio quis, iure unde numquam ipsum facilis accusamus.</p>
        </div>
      ))}

    </div>
  )
}