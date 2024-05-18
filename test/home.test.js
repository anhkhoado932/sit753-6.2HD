const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const { JSDOM } = require('jsdom');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Get Note Page', () => {
    it('should return status 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('Create New Note', function() {
    let dom;
    let document;
    let window;

    before(function(done) {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                if (err) done(err);

                // Set up jsdom with the fetched HTML content
                dom = new JSDOM(res.text, { runScripts: 'dangerously' });
                window = dom.window;
                document = window.document;

                // Load the script.js content into the DOM
                const scriptContent = require('fs').readFileSync('public/js/script.js', 'utf8');
                const scriptEl = document.createElement('script');
                scriptEl.textContent = scriptContent;
                document.body.appendChild(scriptEl);

                done();
            });
    });

    it('should add a new note', function() {
        // Set input values
        document.getElementById('noteTitle').value = 'Test Note Title';
        document.getElementById('noteContent').value = 'This is the content of the test note.';

        // Trigger addNote function
        const addButton = document.getElementById('addNoteButton');
        addButton.onclick = window.addNote; // Ensure the function is attached
        addButton.click();

        const noteList = document.getElementById('noteList');
        expect(noteList.children.length).to.equal(1);

        const noteTitle = noteList.querySelector('h3').textContent;
        const noteContent = noteList.querySelector('p').textContent;

        expect(noteTitle).to.equal('Test Note Title');
        expect(noteContent).to.equal('This is the content of the test note.');
    });
});
