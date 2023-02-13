# angular-local-package-test
angular-local-package-test 1

When a local package is created (in this case arca-shared) and we want to use it inside Angular.
We need to do 2 steps : 

1. run npm pack on arca-shared , generate the tgz file and add the local package to Angular's package.json file (https://github.com/souravs-2pirad/angular-local-package-test/blob/60702e698f8551692840fdcc44e79d8bdd9996b0/v15/package.json#L21)
2. Add this line to angulars tsconfig file to use any functions exported by arca-shared into the angular application. https://github.com/souravs-2pirad/angular-local-package-test/blob/60702e698f8551692840fdcc44e79d8bdd9996b0/v15/tsconfig.app.json#L13
