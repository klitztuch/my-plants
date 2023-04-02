<script>
import SignIn from "$lib/auth/SignIn.svelte";
import {Link} from "carbon-components-svelte";

export let errors;
</script>

<svelte:head>
    <title>
        Login
    </title>
</svelte:head>

<div>
    <div class="header">
        <h4>Login</h4>
    </div>
    <div class="signin-form">
        {#if errors}
            <div class="notification-block">
                <p>{errors}</p>
            </div>
        {/if}

        <SignIn on:login={signIn}/>
        <div>Already have an account? <Link href="/auth/register">Sign Up</Link></div>
    </div>
</div>

<style>
    .header {
        width: 100vw;
        padding: 2em 0;
        min-height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E5F0FF;
    }

    .header h4 {
        color: black;
        font-weight: 600;
        font-size: 3rem;
    }

    .signin-form {
        min-height: 80vh;
        display: grid;
        place-items: center;
    }

    .notification-block {
        min-width: 20vw;
        padding: 1.2em .75em;
        border-radius: 5px;
        background-color: #FE634E;
    }

    .notification-block p {
        color: white;
    }
</style>