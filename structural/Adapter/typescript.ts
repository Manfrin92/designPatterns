class Adaptee {
  public rawXml(): string {
    return '<?xml version="1.0" encoding="ISO-8859-1"?>  <note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Dont forget me this weekend!</body>  </note>';
  }
}

class Adapter {
  public parseXmlToJson(xml: any) {
    const json = {};
    for (const res of xml.matchAll(
      /(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm
    )) {
      const key = res[1] || res[3];
      const value = res[2] && this.parseXmlToJson(res[2]);
      // @ts-ignore
      json[key] = (value && Object.keys(value).length ? value : res[2]) || null;
    }
    return json;
  }
}

function clientCode(target: Adaptee) {
  console.log("Raw xml: ", target.rawXml());
}

const target = new Adaptee();
clientCode(target);

console.log("");

const adaptee = new Adaptee();

console.log("Adapter:");
const adapter = new Adapter();
console.log(adapter.parseXmlToJson(target.rawXml()));
