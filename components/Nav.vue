<template>
  <nav class="px-4 py-2 w-full col-span-3 grid items-center relative bg-primary-dark" id="page-nav">
    <!-- logo -->
    <a href="/" id="nav-icon">
      <img :src="logo" class="w-30px" alt="GeoCoLab">
    </a>
    <!-- menu button -->
    <vue-feather type="menu" v-if="!isLarge" @click="expandMenu = !expandMenu"
                 :aria-expanded="expandMenu" aria-controls="main-menu" />
    <!-- link block 1 -->
    <div id="nav-links">
      <Dropdown v-if="!isLarge" :show="expandMenu" id="main-menu" @toggle-dropdown="toggleMenu" class="mt-0.5">
        <NavBlock :links="links" direction="col" />
      </Dropdown>
      <NavBlock v-else :links="links" direction="row" />
    </div>
    <!-- end link block 1-->
    <!-- link block 2 -->
    <div id="nav-auth">
      <NavBlock direction="row">
        <template v-if="pageContext.user.id">
          <NavItem path="/user/account">
            <span class="<md:hidden">Hi, {{ pageContext.user.given_name }}</span>
            <img :src="pageContext.user.gravatar + '&s=30'"
                 class="inline md:ml-4 rounded-full border-2 border-primary bg-gray-100">
          </NavItem>
          <NavItem path="/#" label="Logout" @click="auth.logout">
          </NavItem>
        </template>
        <template v-else>
          <NavItem path="/user/login" label="Login" />
          <NavItem path="/user/register" label="Register" />
        </template>
      </NavBlock>
    </div>
    <!-- end link block 2 -->
  </nav>
</template>

<script setup>
import logo from '../assets/logo.png';
import NavBlock from './nav/NavBlock.vue';
import NavItem from './nav/NavItem.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { computed, ref } from 'vue';
import Dropdown from './nav/Dropdown.vue';
import { useAuthStore } from '../store/auth';
import { usePageContext } from '../utils/usePageContext';

const auth = useAuthStore();
const pageContext = usePageContext();

const breakpoints = useBreakpoints(breakpointsTailwind);
const isLarge = ref(breakpoints.greater('lg'));

const expandMenu = ref(false);

const defaultRoutes = [
  {
    path: '/about',
    label: 'About'
  },
  {
    path: '/blog',
    label: 'Blog'
  },
];
const hiddenRoutes = [
  {
    path: '/admin',
    label: 'Admin',
    access: ['admin']
  },
  {
    path: '/researcher',
    label: 'Researcher',
    access: ['researcher'],
    dropdown: [
      {
        path: '/applications',
        label: 'Applications',
        dropdown: [
          {
            path: '/applications/new',
            label: 'New'
          }
        ]
      }
    ]
  },
  {
    path: '/manager',
    label: 'Manager',
    access: ['manager'],
    dropdown: [
      {
        path: '/orgs',
        label: 'Organisations/Institutions',
        dropdown: [
          {
            path: '/orgs',
            label: 'Manage'
          },
          {
            path: '/orgs/new',
            label: 'New'
          }
        ]
      },
      {
        path: '/facilities',
        label: 'Facilities',
        dropdown: [
          {
            path: '/facilities/new',
            label: 'New'
          }
        ]
      },
      {
        path: '/review',
        label: 'Applications'
      }
    ]
  }
];

function canAccess(roles) {
  if (pageContext.user.role === 'admin') {
    return true;
  } else {
    return roles.includes(pageContext.user.role);
  }
}

const links = computed(() => {
  let allowedLinks = hiddenRoutes.filter(r => canAccess(r.access));
  return [...defaultRoutes, ...allowedLinks];
});

function toggleMenu(state) {
  expandMenu.value = state;
}

</script>

<style scoped>

</style>
