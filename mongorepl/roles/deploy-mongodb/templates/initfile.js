rs.initiate({
  _id: "rs0",
  members: [
{% for i in groups['replica'] %}
{ _id : {{ loop.index0 }}, host : "{{ i }}:27017" },
{% endfor %}
  ]
})
