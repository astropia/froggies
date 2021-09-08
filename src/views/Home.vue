<template>
  <div id="homepage">
    <section class="home-banner">
      <div class="banner-logo">
        <div class="account">
          <Account />
        </div>
        <img src="@/assets/logo.png" />
        <p>
          Froggie is an on-chain experient. DAO governance will assist all the Froggie residents to build their world in
          pixels.
        </p>
      </div>
      <div class="banner-froggies">
        <img src="@/assets/banner.png" />
      </div>
    </section>

    <section class="home-intro">
      <div>
        <h2 class="_fm">What are Froggies?</h2>
        <p>Froggies are a group of people exploring new worlds and finding answers in practice.</p>
        <p>Avatars are identities to community, that’s just a start.</p>
        <p>Froggies have questions about:</p>
        <ul>
          <li>Can people live on chain?</li>
          <li>If blockchain is creating a virtual world, what would it be like?</li>
          <li>Is a community co-created virtual world feasible?</li>
        </ul>
      </div>

      <div>
        <h2 class="_fm">Rarity</h2>
        <p>Rarity is invalid in governance. All frogs have the same rights.</p>
        <p>
          We recognize the existing rarity economy. Rarity is preserved in order to facilitate future solutions that can
          use it. The value of rare NFTs is left to the market.
        </p>
      </div>

      <div>
        <h2 class="_fm">Froggies Dao Governance</h2>
        <p>Froggies are now live on a blank canvas, each one of them has one vote in governance.</p>
        <p>All residents propose and vote to decide how we will build this world.</p>
        <p>Minting fund goes to Dao 100%.</p>
      </div>
    </section>

    <section class="home-mint">
      <div>
        <h2 class="_fm">Mint to join</h2>
        <div class="mint-button _fm">Mint<span>0.03ETH</span></div>
        <Account />
      </div>
    </section>

    <section class="home-footer">
      <div>
        <h2 class="_fm">Contract</h2>
        <p>xxxxxxxxxxxx</p>
      </div>
      <div class="footer-links _fm">
        <a href="#">Twitter</a>
        <span>-</span>
        <a href="#">Discord</a>
        <span>-</span>
        <a href="#">Telegram</a>
      </div>
    </section>
  </div>
</template>

<script>
import Account from '@/components/ui/Account'

export default {
  name: 'Home',
  components: {
    Account,
  },
}
</script>

<style lang="stylus">
@import '~@/styles/color.styl'

#homepage
  position relative
  overflow hidden
  &:before
    content ''
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-image url('~@/assets/border.png')
    background-repeat repeat-y
    background-size 10rem auto
    z-index -1
  p
    font-size 1.4rem
    line-height 2rem
  h2
    color $main
    text-align center
    font-size 2rem
    line-height 2rem
    font-weight 500

.home-banner
  display flex
  .banner-logo
    flex 1 0 50%
    padding-left 10rem
    padding-right 1rem
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
    position relative
    img
      width 16rem
    >p
      margin 3.8rem 0 4rem
      width 26rem
      text-align center
  .account
    position absolute
    top 1.6rem
    right 1.6rem
  .banner-froggies
    flex 0 1 50%
    min-height 30rem
    max-height 33.3333vw
    overflow hidden
    position relative
    z-index -1
    img
      display block
      height 100%
.home-intro
  padding-top 6rem
  >div
    margin 5em auto
    padding 0 2rem
    width 60%
    max-width 1040px
    box-sizing content-box
  h2
    margin-bottom 5rem
  p
    margin 1.5rem 0
  ul
    padding-left 2rem
    color $main
    list-style disc
    font-size 1.4rem
    line-height 2rem

.home-mint
  padding-bottom 4rem
  >div
    display flex
    flex-direction column
    align-items center
  h2
    margin-bottom 2.5rem
  .mint-button
    margin-bottom 1rem
    width 22rem
    height 6rem
    border .2rem solid $main
    border-radius 0.8rem
    font-size 1.6rem
    display flex
    justify-content center
    align-items center
    color $main
    cursor pointer
    span
      margin-left 1.6rem

.home-footer
  display flex
  flex-direction column
  align-items center
  h2
    margin-bottom 2.5rem
  p
    text-align center
  .footer-links
    padding 7rem 0 5rem
    font-size 1.3rem
    color $main
    display flex
    justify-content center
    align-items center
    span
      margin 0 .8rem

@media screen and (max-width 720px)
  #homepage:before
    transform translateX(5rem) scaleX(-1)
  .home-banner
    flex-direction column
    .banner-logo
      flex 0 0 auto
      padding-left 4rem
      align-items flex-start
      >p
        margin 3.8rem 0 4rem
        width 80%
        text-align left
    .account
      position static
      margin 1.6rem 0 8rem
    .banner-froggies
      flex 1 1 auto
      min-height unset
      max-height unset
      overflow hidden
      position relative
      z-index -1
      img
        width 100%
        height auto
  .home-intro
    >div
      padding-right 5rem
      width 76%
</style>
