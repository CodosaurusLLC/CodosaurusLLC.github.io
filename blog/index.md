---
layout: blog_home
title: Blog
style: blog-index
---

Sorry, the old blog posts have not yet been moved from
[https://blog.codosaur.us](https://blog.codosaur.us){:target="_new"}.&nbsp;
Stay tuned for them to move here;
you can get notified through the RSS link at the bottom.&nbsp;
Meanwhile, below are the ones that _have_ been moved,
plus some new ones.

### Posts

<table class="post-list">
  <thead>
    <tr>
      <th>Title</th>
      <th>Tags</th>
      <th>Last Update</th>
      <th>Original Date</th>
    </tr>
  </thead>
  <tbody>
    {%- for post in site.posts -%}
    <tr>
      <td class="big bold">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </td>
      <td class="tag-column small squished">
        {% for tag in post.tags %}
          <a href="/blog/tags/{{ tag }}">{{ tag }}</a>
        {% endfor %}
      </td>
      <td>{{ post.date | date: site.date_format }}</td>
      <td>
        {{ post.original-date | default: post.date | date: site.date_format }}
      </td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>

### Tag Cloud

<p>
{% for tag in site.tags %}
  <a href="/blog/tags/{{ tag[0] }}" 
     style="font-size: {{ tag[1] | size | times: 4 | plus: 10 }}px">
    {{ tag[0] }}</a>
  {% endfor %}
</p>

[RSS](/feed.xml)
{:class="center"}
