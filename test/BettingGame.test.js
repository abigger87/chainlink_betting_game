const BettingGame = artifacts.require('./BettingGame.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('BettingGame', ([deployer, author, tipper]) => {
  let bettingGame

  before(async () => {
    bettingGame = await BettingGame.deployed()
  });

  describe('deployment', async () => {
        it('deploys successfully', async () => {
        const address = await bettingGame.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        })
    });
})