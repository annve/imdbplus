import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Country.module.scss"

const Book = ({ data }) => {
  var content = data.story.content;
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.studio}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
        </div>
        <div className={styles.flag}>
          <img src={content.flag.filename} />
        </div>
        <div className={styles.description}>
          {render(content.description)}
        </div>
      </main>
    </SbEditable>
  )
}

export default Book
