---
layout: default
redirect_from: /eportfolio/
---

<section>
  <div class="jumbotron">
    <h1>A few facts</h1>
    <p class="lead">
      Hi! I'm Karl Cheng, a Year 10 student at the Australian International School Hong Kong.
      I love programming and creating websites, and I'm always looking for new things to learn about.
      I'm also interested in public speaking, debating, science and mathematics.
    </p>
    <p><a class="btn btn-lg btn-success" href="{{ site.baseurl }}/about.html" role="button">Learn more about me</a></p>
  </div>
</section>
<section>
  {% capture about %}{% include about.md %}{% endcapture %}
  {{ about | markdownify }}
</section>
<section>
  {% capture start %}{% include start.md %}{% endcapture %}
  {{ start | markdownify }}
</section>
<section>
  {% capture portfolio %}{% include portfolio.md %}{% endcapture %}
  {{ portfolio | markdownify }}
</section>