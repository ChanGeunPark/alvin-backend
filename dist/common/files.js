async function fileHandler() {
    const response = await (await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v2/direct_upload`),
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.CF_TOKEN}`,
            },
        });
}
//# sourceMappingURL=files.js.map