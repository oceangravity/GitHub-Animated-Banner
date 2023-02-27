function baseColumn() {
    const g = document.createElement("g");
    g.setAttribute("senior", "true");

    g.innerHTML = `
            <rect width="10" height="10" x="14" y="0" class="ContributionCalendar-day" data-date="2077-01-01" data-level="0" rx="2" ry="2"></rect>
            <rect width="10" height="10" x="14" y="13" class="ContributionCalendar-day" data-date="2077-01-01" data-level="0" rx="2" ry="2"></rect>
            <rect width="10" height="10" x="14" y="26" class="ContributionCalendar-day" data-date="2077-01-01" data-level="0" rx="2" ry="2"></rect>
            <rect width="10" height="10" x="14" y="39" class="ContributionCalendar-day" data-date="2077-01-01" data-level="0" rx="2" ry="2"></rect>
            <rect width="10" height="10" x="14" y="52" class="ContributionCalendar-day" data-date="2077-01-01" data-level="0" rx="2" ry="2"></rect>
            <rect width="10" height="10" x="14" y="65" class="ContributionCalendar-day" data-date="2077-01-01" data-level="0" rx="2" ry="2"></rect>
            <rect width="10" height="10" x="14" y="78" class="ContributionCalendar-day" data-date="2077-01-01" data-level="0" rx="2" ry="2"></rect>
        `;
    return g;
}

let xBase = -38;

function createLetter(config) {
    const output = [];
    config.forEach((column) => {
        const g = baseColumn();
        const rectElements = g.querySelectorAll("rect");

        rectElements.forEach((rect, index) => {
            rect.setAttribute("data-level", String(column[index] ? 4 : 0));
        });
        output.push(g.outerHTML);
    });

    return output.join("");
}

function createPhrase(text) {
    function getCharacter(character) {
        switch (character) {
            case "M":
                return (
                    createLetter([
                        [1, 1, 1, 1, 1, 1, 1],
                        [0, 1, 0, 0, 0, 0, 0],
                        [0, 0, 1, 0, 0, 0, 0],
                        [0, 1, 0, 0, 0, 0, 0],
                        [1, 1, 1, 1, 1, 1, 1]
                    ]) + baseColumn().outerHTML
                );
                break;
            case "B":
                return (
                    createLetter([
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 1],
                        [0, 1, 1, 0, 1, 1, 0]
                    ]) + baseColumn().outerHTML
                );
                break;
            case "E":
                return (
                    createLetter([
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 1]
                    ]) + baseColumn().outerHTML
                );
                break;
            case "H":
                return (
                    createLetter([
                        [1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0],
                        [1, 1, 1, 1, 1, 1, 1]
                    ]) + baseColumn().outerHTML
                );
                break;
            case "U":
                return (
                    createLetter([
                        [1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 1],
                        [0, 0, 0, 0, 0, 0, 1],
                        [0, 0, 0, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 0]
                    ]) + baseColumn().outerHTML
                );
                break;
            case "L":
                return (
                    createLetter([
                        [1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 0, 0, 0, 0, 1],
                        [0, 0, 0, 0, 0, 0, 1],
                        [0, 0, 0, 0, 0, 0, 1],
                        [0, 0, 0, 0, 0, 0, 1]
                    ]) + baseColumn().outerHTML
                );
                break;
            case "♥":
                return (
                    createLetter([
                        [0, 0, 1, 1, 0, 0, 0],
                        [0, 1, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 0]
                    ]) + baseColumn().outerHTML
                );
                break;
            case " ":
                return (
                    createLetter([
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0]
                    ]) + baseColumn().outerHTML
                );
                break;
        }
    }

    const output = [];
    text.split("").forEach((character) => {
        if (getCharacter(character)) output.push(getCharacter(character));
    });

    return output.join("");
}

function resetDOM(limit = 728) {
    xBase = -38;
    Array.from(
        document.querySelectorAll(".js-calendar-graph-svg > g g[senior]")
    ).forEach((gElement) => {
        limit += 14;
        gElement.setAttribute("transform", `translate(${limit}, 0)`);

        const rectElements = gElement.querySelectorAll("rect");

        xBase -= 1;
        rectElements.forEach((rect) => {
            rect.setAttribute("x", xBase);
        });
    });
}

function reset(html, limit = 728) {
    const g = document.createElement("g");
    g.innerHTML = html;
    const gElements = g.querySelectorAll("g");
    Array.from(gElements).forEach((gElement) => {
        limit += 14;
        gElement.setAttribute("transform", `translate(${limit}, 0)`);

        const rectElements = gElement.querySelectorAll("rect");

        xBase -= 1;
        rectElements.forEach((rect) => {
            rect.setAttribute("x", xBase);
        });
    });
    return Array.from(gElements);
}

function addText(gElements) {
    gElements.forEach((g) => {
        document.querySelector(".js-calendar-graph-svg > g").appendChild(g);
    });
}

function turnOffTheLights() {
    Array.from(document.querySelectorAll(".js-calendar-graph-svg > g g")).forEach(
        (g) => {
            Array.from(g.querySelectorAll("rect")).forEach((rect) => {
                rect.setAttribute("data-level", "0");
            });
        }
    );
}

function resetSVG() {
    const svg = document.querySelector(".js-calendar-graph-svg").innerHTML;
    document.querySelector(".js-calendar-graph-svg").innerHTML = "";
    document.querySelector(".js-calendar-graph-svg").innerHTML = svg;
}

const extractValues = (str) =>
    str
        .match(/\((-?\d+),\s*(-?\d+)\)/)
        ?.slice(1)
        .map(Number);

function move() {
    Array.from(document.querySelectorAll("[senior]")).forEach((g) => {
        const newX = extractValues(g.getAttribute("transform"))[0] - 14;
        g.setAttribute("transform", `translate(${newX}, 0)`);
        const rectElements = g.querySelectorAll("rect");

        rectElements.forEach((rect) => {
            rect.setAttribute("x", Number(rect.getAttribute("x")) + 1);
        });
    });
}

let timer = 0;

function animate(time = 150) {
    timer = setInterval(() => {
        move();

        const last = document.querySelectorAll("[senior]:last-child")[0];
        if (extractValues(last.getAttribute("transform"))[0] < 0) {
            resetDOM();
        }
    }, time);
}

function githubBanner(text) {
    turnOffTheLights();
    const phrase = createPhrase(text);
    const reseted = reset(phrase);
    addText(reseted);
    resetSVG();
    animate();
}
