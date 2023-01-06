import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';
import styles from './Booklist.module.css';

const Booklist = ({ books }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.booklist}>
      {books.length > 0 ? books.map((book) => (
        <div key={book.item_id} className={styles.singleBook}>
          <div className="flex-right">
            <p className={styles.category}>Adventure</p>
            <p className={styles.title}>{book.title}</p>
            <p className={styles.author}>{book.author}</p>

            <button className={styles.btnOutline} type="button">Comment</button>
            <span className={styles.btnDivider} />
            <button className={styles.btnOutline} type="button" onClick={() => handleDelete(book.item_id)}>Remove</button>
            <span className={styles.btnDivider} />
            <button className={styles.btnOutline} type="button">Edit</button>
          </div>

          <div className={styles.flexLeft}>
            <div className={styles.progressBox}>
              <div className={styles.progressContainer}>
                <div className={styles.progress} />
              </div>
              <div>
                <p className={styles.percent}>64%</p>
                <p className={styles.completed}>Completed</p>
              </div>
            </div>

            <div className={styles.progressDivider} />

            <div className={styles.currentChapter}>
              {/* <p className={styles.heading}>CURRENT CHAPTER</p> */}
              <p className={styles.chapterLabel}>CURRENT CHAPTER</p>
              <p className={styles.chapter}>Chapter 15</p>
              <div>
                <button type="button" className={styles.btnPrimary}>UPDATE PROGRESS</button>
              </div>
            </div>

          </div>

        </div>

      )) : 'Oops! No books found'}
    </div>
  );
};

Booklist.defaultProps = { books: null };
Booklist.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })),
};

export default Booklist;
