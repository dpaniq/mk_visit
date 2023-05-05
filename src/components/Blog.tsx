

import type { Component } from 'solid-js';

import BlogImg from '../assets/img/blog.jpg'
import Separator from './Separator';
import { Colors } from '../constants';

const Blog: Component = () => {
  return (
    <section id="blog">
      <Separator
        position="topLeft"
        styles={{
          'position': 'absolute',
          'top': 0,
          // 'bottom': 0,
          'background-color': Colors.gray,
        }}
      />

      <Separator
        position="bottomRight"
        styles={{
          'position': 'absolute',
          // 'top': 0,
          'bottom': 0,
          'background-color': Colors.gray,
        }}
      />

      {/* Block */}
      <div class="block">
        <div class="block__text">
          <div class="text-home">
            <h1>Inspiration</h1>
            <h5>Jan, 2021</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magnam a quis recusandae aperiam sequi quia vitae laboriosam et consequuntur! Aperiam sapiente sint laboriosam, voluptatibus quo, impedit iste quisquam commodi labore recusandae nemo! Illo ipsum veniam minima laudantium nulla tempore eos, cumque culpa voluptatum voluptate laboriosam voluptates iste esse corporis ab eum accusantium voluptatibus, excepturi reiciendis harum quas in deserunt! Cupiditate autem, ad unde nemo vel mollitia, ab veniam cum atque obcaecati excepturi maiores! Doloremque maiores, fuga quaerat aliquid veritatis atque dicta unde repellendus rem accusamus dolores quam pariatur obcaecati, nobis, maxime facilis necessitatibus assumenda eos quis recusandae. Vel, rem exercitationem recusandae accusamus aspernatur sequi quaerat aperiam animi, quos est voluptatem saepe id a numquam tempora praesentium veniam iusto distinctio nemo odio cupiditate quam eligendi. Natus officia molestias quos ipsum facere placeat quam atque soluta alias? Aspernatur non optio maiores assumenda doloribus deserunt in iusto. Tenetur minus similique tempore architecto!</p>
          </div>

          {/* Icon */}
          <div class="icon-in-block">
            <div class="icon">
              <span class="material-symbols-outlined">
                south
              </span>
            </div>
          </div>
        </div>
        <div class="preview">
          <img src={BlogImg} alt="Solid logo" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
