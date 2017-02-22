
# A bash script tool to help streamline creation of new websites for Epicodus

#### 10 Feb., 2017, v.1.0.1

#### By Mark Fisher

## Description

This script takes three arguments from the user (repo name, parter 1 initials, and partner 2 initials), and uses those variables to create a directory with repo name, create a "css" subdirectory, create an "img" subdirectory, create a styles.css document in the css subdirectory, create an index.html document in the repo folder, initialized the folder as a git repo, executes `git pair` with partner 1's and partner 2's intials, adds everything, makes a first paired commit, and opens the directory in atom.

### Specifications

* The program should return __ when __.
  * **Input Example**: 
  * **Output Example**:

* The program should return __ when __.
  * **Input Example**: 
  * **Output Example**:

## Setup/Installation Requirements

### If working in pairs
* Set up your .pairs document for the day
* Clone this repo. (to your Desktop)
* Open terminal
* Navigate to the websiteRepoSetup directory: `cd ~/Desktop/websiteRepoSetup`. **This step is necessary because template files from websiteRepoSetup will need to be copied.**
* Type `./websiteRepoSetup.sh [yourRepoName] [partner1Initials] [partner2Initials]`
* Enjoy

### If working alone
* Clone this repo. (to your Desktop)
* Open terminal
* Navigate to the websiteRepoSetup directory: `cd ~/Desktop/websiteRepoSetup`. **This step is necessary because template files from websiteRepoSetup will need to be copied.**
* Type `./websiteRepoSetupIndivid.sh [yourRepoName] ["Your first and last name in quotes"] [yourEmailAddress]
* Enjoy


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* bash
* git

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher and Clifford Grimmell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.