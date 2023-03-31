---
layout: default
title: Blog
style: blog-index
---

Sorry, most of the old blog posts have not yet been moved from
[https://blog.codosaur.us](https://blog.codosaur.us){:target="_new"}.&nbsp;
Stay tuned for them to move here;
you can get notified through the RSS link at the bottom.&nbsp;
Meanwhile, below are the ones that _have_ been moved,
plus some newer ones.

{% assign sorted_posts = site.posts | sort: "date" %}

<table class="post-list">
  <thead>
    <tr>
      <th>Title</th>
      <th class="updated-column">Updated</th>
      <th>Tags</th>
    </tr>
  </thead>
  <tbody>
    {%- for post in sorted_posts reversed -%}
    <tr>
      <td>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </td>
      <td>{{ post.date | date: site.date_format }}</td>
      <td class="tag-column">
        {% for tag in post.tags %}
          <a href="/blog/tags/{{ tag }}">{{ tag }}</a>
        {% endfor %}
      </td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>

<br/>

### Tag Cloud

{% assign sorted_tags = site.tags | sort %}
<div class="tag-cloud-marker"></div>
{%- for tag in sorted_tags -%}
  {%- assign ems = tag[1] | size | plus: 2 | times: 0.2 -%}
  [{{ tag[0] }}](tags/{{ tag[0] }}){:style="font-size: {{ems}}em; line-height: 1em"}
{% endfor %}

[Click here for RSS feed](/feed.xml)
{:class="center"}
