export default {
  form: `
<div class="ui input fluid {{ component.suffix ? ' right' : '' }}{{ (component.prefix || component.suffix) ? ' labeled' : '' }}">
{% if (component.prefix) { %}
<label class="ui label">{{component.prefix}}</label>
{% } %}
<{{input.type}} 
  ref="{{input.ref ? input.ref : 'input'}}" 
  {% for (var attr in input.attr) { %}
  {{attr}}="{{input.attr[attr]}}"
  {% } %}
>{{input.content}}</{{input.type}}>
{% if (self.hasCounter) { %}
<span class="ui right floated" ref="counter"></span>
{% } %}
{% if (component.suffix) { %}
<div class="ui label">{{component.suffix}}</div>
{% } %}
</div>
`,
  html: '<div ref="value">{% if (value) { %}{{value}}{% } else { %}-{% } %}</div>'
};