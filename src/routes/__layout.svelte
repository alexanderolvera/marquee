<script>
	import '$lib/app.css';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<h1>MARQUEE</h1>
	</div>
	<div class="flex-none gap-2">
		<div class="dropdown dropdown-end">
			<div tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="https://api.lorem.space/image/face?hash=33791" alt="avatar" />
				</div>
			</div>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<a class="justify-between" href="/profile"> Profile </a>
				</li>
				<li><a href="/profile/settings">Settings</a></li>
				<li><button class="btn btn-error btn-ghost hover:text-error">Logout</button></li>
			</ul>
		</div>
	</div>
</div>
<slot />
