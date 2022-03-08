const hre = require('hardhat')

;(async () => {
  // compile contract code
  await hre.run('compile')

  // get contract to deploy from compiled artifacts
  const CommentsContract = await hre.ethers.getContractFactory('Comments')

  // deploy contract
  const contract = await CommentsContract.deploy()
  await contract.deployed() // wait for deployment to complete

  // seed contract with initial data
  const tx1 = await contract.addComment('my-blog-post', 'My first comment')
  await tx1.wait()

  const tx2 = await contract.addComment('my-blog-post', 'My second comment')
  await tx2.wait()

  // log deployed contract address
  console.log(`Contract deployed to: ${contract.address}`)
})()
