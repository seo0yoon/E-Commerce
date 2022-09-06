import React from 'react';
import JournalInput from './JournalInput';
import RecentPosts from './RecentPosts';
import { useSelector } from 'react-redux';
import Archives from './Archives';
import Categories from './Categories';
import Metas from './Metas';
import '../css/index.css';

function JournalInside() {
  // const articles = useSelector((state) => state.layouts.journal.articles);
  const recent_posts = useSelector((state) => state.layouts.journal.recent);
  const archives = useSelector((state) => state.layouts.journal.archives);
  const categories = useSelector((state) => state.layouts.journal.categories);
  const metas = useSelector((state) => state.layouts.journal.metas);

  return (
    <section className="journal">
      <div className="wrapper">
        <div className="top">
          <div className="title txt-bold">Journal</div>
          <div className="bread-crumbs">Home &gt; Journal</div>
        </div>
        <div className="main">
          <div className="journal-inside">
            <div className="img"></div>
            <div className="router">Admin - Comments (1) - Category</div>
            <div className="desc">
              <div className="title txt-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="context">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted.
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater pleasures.
              </div>
            </div>
            <div className="tags txt-bold">
              <div className="tag-btn">Tag1</div>
              <div className="tag-btn">Tag2</div>
              <div className="tag-btn">Tag3</div>
            </div>
            <div className="comments">
              <div className="title txt-bold">Comments (1)</div>
              <div className="subtitle">
                <div className="person-name">John Ford</div>
                <div className="date">6 months ago</div>
              </div>
              <div className="context">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
              <div className="reply txt-bold">Reply &gt;</div>
            </div>
            <div className="reply-block">
              <div className="title txt-bold">Leave a Reply</div>
              <div className="guide">
                Your email address will not be published. Required fields are
                marked *
              </div>
              <ul className="input-boxes">
                <li className="input-box">
                  <div className="title txt-bold">Name</div>
                  <input type="text" placeholder="Your name here" />
                </li>
                <li className="input-box">
                  <div className="title txt-bold">Email</div>
                  <input type="text" placeholder="Your email here" />
                </li>
                <li className="input-box">
                  <div className="title txt-bold">Website</div>
                  <input type="text" placeholder="Your Website here" />
                </li>
                <li className="input-box">
                  <div className="title txt-bold">Comment</div>
                  <input type="text" placeholder="Your comment here" />
                </li>
              </ul>
              <div className="border-line"></div>
              <div className="save-check">
                <div className="check-box"></div>
                <div className="context txt-bold">
                  Save my name, email, website in this browser for the next time
                  I comment.
                </div>
              </div>
              <div className="submit-btn txt-bold">Post</div>
            </div>
          </div>

          <aside className="router">
            <JournalInput />
            <div className="recent-posts">
              <div className="title txt-bold">Recent Posts</div>
              <ul className="wrapper">
                {recent_posts.map(({ front_txt, behind_txt }, idx) => {
                  return (
                    <RecentPosts
                      front_txt={front_txt}
                      behind_txt={behind_txt}
                      key={idx}
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

export default JournalInside;
