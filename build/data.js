function getAttrsCol(list) {
  return list.map(v => `'${v.querySelector('td').innerText}',`);
}

function getAttrs(list, namespace) {
  const attr = {};
  list.forEach(li => {
    const tds = [...li.querySelectorAll('td')].map(td => {
      return td.innerText;
    });

    let key = namespace;

    if (namespace) {
      key += '/';
    }

    key += tds[0];

    attr[key] = {
      description: tds[3]
    };

    if (tds[4] !== '-') {
      attr[key].version = `>=${tds[4]}`;
    }
  });
  console.log(JSON.stringify(attr, 4));
}

const table = document.querySelector('table');
const list = [...table.querySelectorAll('tbody > tr')];

console.log(getAttrsCol(list).join('\n'));

getAttrs(list, namespace);
