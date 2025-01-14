export function FAQ() {
    const faqs = [
        {
            text: 'Who is TCP1P?',
            description: `
                TCP1P is a CTF (Capture The Flag) community from Indonesia. We are enthusiastic about CTF and
                actively participate in CTF events on <a class="link" target="_blank"
                    href="https://ctftime.org/team/187248">CTFtime</a>. Our mission is to bring together CTF
                players from all corners of Nusantara, so we can play and learn CTF together. If you are a CTF
                player from Indonesia, we welcome you to join us!
            `
        },
        {
            text: 'Who can join?',
            description: `
                This CTF welcomes participants from all corners of the world, ensuring that it is accessible to
                people worldwide. To participate, all you need to do is form a team with a minimum of one
                person. Whether you choose to collaborate with a small group or assemble a larger team, there
                are no restrictions on the team size.
            `
        },
        {
            text: 'How to join?',
            description: `
                To join this CTF, we recommend that you first create a team on CTFtime. Once you have formed
                your team, you can add this <a class="link" target="_blank"
                    href="https://ctftime.org/event/2256/">event</a> and wait for the start of the CTF on
                October 11th. Lastly, don't forget to join our Discord server for more information. Here is the
                link: <a class="link" target="_blank" rel="noopener noreferrer"
                    href="https://discord.gg/Gj6h9TjN3D">Discord</a>.
            `
        }
    ];

    return (
        <div className="grid gap-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-red-500/10 p-6 hover:border-red-400/30 transition-all duration-300">
                    <div className="text-xl font-medium text-white mb-4">{faq.text}</div>
                    <div className="text-gray-400" dangerouslySetInnerHTML={{ __html: faq.description }}></div>
                </div>
            ))}
        </div>
    );
}
