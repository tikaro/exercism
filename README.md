# John's Exercism Exercises
This is my local repository for holding [exercism](exercism.io) exercises.

## Installing the Exercism CLI on Windows
I installed the Exercism CLI on Windows using the manual instructions:
http://exercism.io/clients/cli/install#installing-manually
...because I didn't feel like installing the Chocolatey package manager.

Here's what I did:

* I downloaded [exercism-windows-64bit.zip](https://github.com/exercism/cli/releases/download/v2.4.1/exercism-windows-64bit.zip) version 2.4.1 from Github.
* I extracted it and moved `exercism.exe` to `C:\Program Files\Exercism\exercism.exe`
* I added `C:\Program Files\Exercism` to my environment variables.
* I restarted cmder, then ran `exercism` on the command line to verify that Exercism was running. I saw Exercism's help text, so I knew that everything was good so far.
* Next, I configured my Exercism API Key. I authenticated with GitHub, then went to http://exercism.io/account/key 
* I ran the provided prompt to configure my key: `exercism configure --key=abcde1234567890` (not my real key).  Exercism responded that it had written my key: `Configuration written to C:\Users\JohnYoung\.exercism.json`
* I ran `exercism status typescript` to see the status of work in progress.  It worked just fine:

```Your status on the typescript track:

Most recently submitted exercise:
 - nth-prime (submitted on October 17, 2017)

Exercises fetched but not submitted:
 - sorry, tracking disabled for fetching

Exercises skipped:```