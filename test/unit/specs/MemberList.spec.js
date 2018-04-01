import Vue from 'vue'
import MemberList from '@/components/MemberList'

describe('MemberList.vue', () => {
  it('should contain member in the member list', () => {
    const Constructor = Vue.extend(MemberList)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).to.contain('Warren')
  })
})
