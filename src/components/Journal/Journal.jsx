import React from 'react';
import JournalCard from './components/JournalCard';
import JournalInput from './components/JournalInput';
import RecentPosts from './components/RecentPosts';
import './css/index.css';
import { useSelector } from 'react-redux';
import Archives from './components/Archives';
import Categories from './components/Categories';
import Metas from './components/Metas';
import { Link } from 'react-router-dom';

function Journal() {
  const articles = useSelector((state) => state.layouts.journal.articles);
  const recent_posts = useSelector((state) => state.layouts.journal.recent);
  const archives = useSelector((state) => state.layouts.journal.archives);
  const categories = useSelector((state) => state.layouts.journal.categories);
  const metas = useSelector((state) => state.layouts.journal.metas);
  // const articles = useSelector((state) => state.layouts.journal.articles);

  return (
    <section className="journal">
      <div className="wrapper">
        <div className="top">
          <div className="title txt-bold">Journal</div>
          <div className="bread-crumbs">Home &gt; Journal</div>
        </div>
        <div className="main">
          <div className="contents">
            <div className="articles">
              {articles.map(({ categories, title, desc, path }, idx) => {
                return (
                  <Link to={path}>
                    <JournalCard
                      key={idx}
                      title={title}
                      desc={desc}
                      categories={categories}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="more-btn txt-bold">Load More</div>
          </div>
          <aside className="router">
            <JournalInput />
            <div className="recent-posts">
              <div className="title txt-bold">Recent Posts</div>
              <ul className="wrapper">
                {recent_posts.map(({ front_txt, behind_txt }, idx) => {
                  return (
                    <RecentPosts
                      key={idx}
                      front_txt={front_txt}
                      behind_txt={behind_txt}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="archives">
              <div className="title txt-bold">Archives</div>
              {archives.map(({ context }, idx) => {
                return <Archives context={context} key={idx} />;
              })}
            </div>
            <div className="categories">
              <div className="title txt-bold">Categories</div>
              <ul className="wrapper">
                {categories.map(({ context }, idx) => {
                  return <Categories context={context} key={idx} />;
                })}
              </ul>
            </div>
            <div className="metas">
              <div className="title txt-bold">Meta</div>
              <ul className="wrapper">
                {metas.map(({ context }, idx) => {
                  return <Metas context={context} key={idx} />;
                })}
              </ul>
            </div>
            <div className="tags">
              <div className="title txt-bold">Tags</div>
              <div className="tags-btns">
                <div className="tag-btn">Tag1</div>
                <div className="tag-btn">Tag2</div>
                <div className="tag-btn">Tag3</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Journal;
