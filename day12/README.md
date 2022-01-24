## Day 12

Revisiting Rock Paper Scissors for today. Will be working on creating a UI for the website. Also learning about *branching* in Git. A Git concept that always to make changes without having to break what was already existing. The new branch allows to go back to what was done previously.

### New Git Concepts

##### Branching
```
git branch <branch name> //Used for making a new branch
git checkout <branch_name> //Change to that new one

git checkout -b <branch_name> //Creates a new branch and Changes to that new one

git branch //See list of all branches

git branch main //Go back to main branch

git branch -d <branch_name> //Deletes branch if the branch hasn't already been merged into main
```

##### Merging
```
git merge <branch_name> //Takes the changes you've committed in <branch_name> and adds them to the branch currently on
```