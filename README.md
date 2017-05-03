# _Epicodus Track Suggester_

#### _HTML CSS and JavaScript Webpage,_ _4.28.2017_

#### By _**Isabella Abatgis**_

## Description

This a website that determines which Epicodus course track to take depending on what the user inputs. View at: https://sigtaba.github.io/track-suggester

## Specs

- Detect if input is not text (ex: numbers, punctuation, blank)
  - Input Example: @77|3
  - Output Example: false

- Detect capitalization and convert all to lowercase
 - Input Example: AppLe
 - Output Example: apple

- Detect vowels
  - Input Example: apple
  - Output Example: a, e

- Detects consonants
  - Input Example: apple
  - Output Example: p,p,l

- Detects first letter of word
  - Input Example: banana
  - Output Example: b

- Detect words starting with vowels
 - Input Example: apple
 - Output Example: true

- Detect words starting with consonants
 - Input Example: apple
 - Output Example: false

- Output starts with first vowel in word
 - Input Example: banana
 - Output Example: anana

- If word starts with vowel - add "way" to the end
  - Input Example: orange
  - Output Example: orangeway

- If consonants present before first vowel - move all to end of the word (in order)
  - Input Example: grapes
  - Output Example: apesgr

- If consonants present before first vowel - add ay after moved constant at end of word
  - Input Example: banana
  - Output Example: ananabay

- If y is not at the beginning of a word - treat it as a vowel
  - Input Example: python
  - Output Example: ythonpay

- If q is followed by a u, treat it as a consonant
  - Input example: Queen
  - Output Example: eenquay

## Setup/Installation Requirements

* _Clone repository_
* _Open in browser_

## Support and contact details

_Please contact abatgis@gmail.com with any bugs or issues._

## Technologies Used

_HTML_

_CSS_

_Bootstrap_

_JavaScript_

_JQuery_

### License

*MIT*

Copyright (c) 2017 **_Isabella Abatgis_**
