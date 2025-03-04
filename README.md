# Slack Quote Generator

It was common on my robotics team to screen capture private messages people had sent in [Slack](https://slack.com/) and share them with other members of the team, all in lighthearted fun of course. At some point it became popular to photoshop some of these quotes to be funnier or include some ridiculous quote. In order to automate this admittedly quite simple photoshop task, I built this website that can make these fake screenshots all with front-end JavaScript.

## Technology

I first started by rendering the quotes using HTML, CSS, and JavaScript. It just takes the form data and outputs it to a preformatted quote preview.

The next step was turning the rendered DOM into a screenshot. I didn't want to use any cloud or backend services to do this as that would be pretty overkill. I settled on the library [html2canvas](https://html2canvas.hertzen.com/) which had exactly the functionality I needed: capturing the rendered DOM as an image all using front-end JS.

Lastly, I threw in a web app manifest and service worker to allow for offline functionality. Afterall, this works entirely on the front-end so there isn't any reason not to make it offline capable.

## Demo

Feel free to check out the [demo](https://holdena1.github.io/FakeSlackQuoteGenerator/).
