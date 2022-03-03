// Check a string and replace all ('&' with '&amp;') & ('<' with '&lt;') & ('>' with '&gt;')
// ('"' with '&quot;') & ("'" with '&apos;')

const LIST = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(item) {
    return LIST[item];
  });
}
console.log(convertHTML('Dolce & "Gabbana" & nooit & nie'));
