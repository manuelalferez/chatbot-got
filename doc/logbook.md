# Logbook
Read about the learning process in developing the project. 

## Issues with "Getting started"
The guide of https://botonic.io/docs/getting-started is missing a step because:
```
Step 3 – Run Your Bot
cd myBot
botonic serve
```
Previously you need to install all your npm's dependencies by `npm install`.


And when you try to install them using a npm version higher than 6, you will get the issue: [dependencies installation failed error](https://github.com/hubtype/botonic/issues/2042).

They way to jump though it mentioned in [this post](https://github.blog/2021-02-02-npm-7-is-now-generally-available/#peer-dependencies):

> Automatically installing peer dependencies is an exciting new feature introduced in npm 7. In previous versions of npm (4-6), peer dependencies conflicts presented a warning that versions were not compatible, but would still install dependencies without an error. npm 7 will block installations if an upstream dependency conflict is present that cannot be automatically resolved.

A patch for this would be to use a lower version of npm using nvm:
```bash
nvm install 13 
nvm use 13
You can check your version:
```
```bash
npm version
```
```bash
# output:
{
  ...
  npm: '6.14.4',
  ...
  node: '13.14.0',
  ...
}
```

## Bug in Carousel's documentation

You can see it here: https://botonic.io/docs/components/carousel/

```bash
const StyledArrowContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 10px;
  height: calc(100% - 20px);
  width: 22px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  ```

  And the problem is that the closing inverted comma is being lost. 