let miniaturas = [
    'https://i.ytimg.com/an_webp/az7un5vDELs/mqdefault_6s.webp?du=3000&sqp=COTm16sG&rs=AOn4CLBbPpjHtjIHcSjiNXT4A86HJ0FJlw',
    'https://i.ytimg.com/an_webp/A0M-a6e2JAI/mqdefault_6s.webp?du=3000&sqp=CMrX16sG&rs=AOn4CLBtpAPBrQEOqFhlQhIpNWwXaGcPbA',
    'https://i.ytimg.com/an_webp/coZhAOyrPFA/mqdefault_6s.webp?du=3000&sqp=CIDu16sG&rs=AOn4CLDpz7wBsC5Au6fw0-Pby1nY7A5i2A',
    'https://i.ytimg.com/an_webp/x3PLSYkSd4s/mqdefault_6s.webp?du=3000&sqp=CMrs16sG&rs=AOn4CLAhXGcViQzZpZ07y6wKEgzgWdnvNw',
    'https://i.ytimg.com/an_webp/pCuehXQsIBw/mqdefault_6s.webp?du=3000&sqp=CKzc16sG&rs=AOn4CLDkcbI0dHL4pUhEPWmmgqHf0ECuBQ',
    'https://i.ytimg.com/an_webp/XyBM2TUMTho/mqdefault_6s.webp?du=3000&sqp=CIbB16sG&rs=AOn4CLAEvqdq1u6v4o_dN8vogoeA7XPGIg',
    'https://i.ytimg.com/an_webp/FvGkf3tkMiA/mqdefault_6s.webp?du=3000&sqp=CPDv16sG&rs=AOn4CLAilQfKl0wBaLL7seG0B78RbkHRBQ',
    'https://i.ytimg.com/an_webp/fhTzX7wvscc/mqdefault_6s.webp?du=3000&sqp=CKnn16sG&rs=AOn4CLDt73v4rdfOWCwSjYC6ITtg27xtUA',
    'https://i.ytimg.com/an_webp/y5e-ojVQyiM/mqdefault_6s.webp?du=3000&sqp=CNX416sG&rs=AOn4CLAoYf8DJ16LrE-0QNTWpGbajViczA',
    'https://i.ytimg.com/an_webp/eeFpCIKhzZQ/mqdefault_6s.webp?du=3000&sqp=CKT316sG&rs=AOn4CLA6JN7e193V1lOc_zFDOplrh5FOZA',
    'https://i.ytimg.com/an_webp/68HLygKUVGA/mqdefault_6s.webp?du=3000&sqp=CIDu16sG&rs=AOn4CLCTp4ToaJWdpUf4GS8hq4pSDzqoqg',
    'https://i.ytimg.com/an_webp/syuYnmEI348/mqdefault_6s.webp?du=3000&sqp=CMHt16sG&rs=AOn4CLDG3hkDhuDGs5o0pCk7vTIHbiNs0w',
    'https://i.ytimg.com/an_webp/y_iA3btf3To/mqdefault_6s.webp?du=3000&sqp=CJzZ16sG&rs=AOn4CLA0qRMeJ8vFLFksbDuJ52w3aS-GLg',
    'https://i.ytimg.com/an_webp/aAUN5XNkFm8/mqdefault_6s.webp?du=3000&sqp=CJj016sG&rs=AOn4CLDud3VQgDnMLJY_sghRx09CWNqADg',
    'https://i.ytimg.com/an_webp/6GlVcgnkPRA/mqdefault_6s.webp?du=3000&sqp=COCx16sG&rs=AOn4CLBRTIpwmwLLdtun4FEoUc4_7Pt9RQ',
    'https://i.ytimg.com/an_webp/BSgM8sdD4vk/mqdefault_6s.webp?du=3000&sqp=CP_q16sG&rs=AOn4CLD8TAepbUoYDsM_cDAGQxTIeotrog',
    'https://i.ytimg.com/an_webp/bbo2rkXO79Y/mqdefault_6s.webp?du=3000&sqp=COiA2KsG&rs=AOn4CLDXUMRVhrDXZ9MciA3NY4us_sKO6w',
    'https://i.ytimg.com/an_webp/DSyxqvUrdug/mqdefault_6s.webp?du=3000&sqp=CLiC2KsG&rs=AOn4CLAUqjWkaZSeCXXAWvaUoAlgCcKuQw',
    'https://i.ytimg.com/an_webp/GN5dknvHlno/mqdefault_6s.webp?du=3000&sqp=CJa516sG&rs=AOn4CLCKiVxtFuytQjNqazUKDpGgwqUUuA',
    'https://i.ytimg.com/an_webp/B6JX7QSBd0U/mqdefault_6s.webp?du=3000&sqp=CLiF2KsG&rs=AOn4CLCX0-Klo1uNSjL_A57XG9_fOD_-iQ',
]

imgs = [];
background = document.querySelector(".img-background");

miniaturas.forEach((element, index) => {
    imgs[index] = '<img src="' + element + '">'
});

background.innerHTML = imgs.join("");