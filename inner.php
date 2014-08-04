<?php include 'head.inc.php' ?>

<body class="work inner">
	<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            <![endif]-->

            <!-- Add your site or application content here -->

  <!-- Header -->
  <?php include 'header.inc.php' ?>
  <!-- End header -->

            <!-- Content -->
            <div class="wrapper">
            	<div class="col left">
			<!--
				Slider
			-->
			<section class="slider">
				<div class="flexslider carousel">
					<ul class="slides">
<!--						<li style="background-image:url(img/people.jpg)" class="bg-image">
							<div class="info-box">
								<div class="inner">
									<h2>Go Smarter is great for your business</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</div>
						</li>
						<li style="background-image:url(img/people.jpg)" class="bg-image">
							<div class="info-box">
								<div class="inner">
									<h2>Go Smarter is great for your business</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</div>
						</li>-->
						<li style="background-image:url(img/people.jpg)" class="bg-image">
							<!--<div class="info-box">
								<div class="inner">
									<h2>Go Smarter is great for your business</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</div>-->
						</li>
					</ul>
				</div>
			</section>
			<!--
				End slider
			-->
		</div>
		<div class="col right ">
		<!--
			<i class="fa fa-angle-right"></i>
			<i class="fa fa-angle-left hidden"></i>
		-->
		<div class="inner scroll-pane">
			<div class="padme">
				<h1>GoSmarter can help you</h1>
				<p>Go Smarter aims to help you make smarter travel choices by leaving the car at home and looking for active, greener and healthier ways of travelling to work or school. By getting more children and families walking, cycling or scooting to school we can cut congestion and help improve the local economy. </p>

				<h2>Plan your journey</h2>

				<form action="">
					<div>
						<label>From</label>
						<input type="text" placeholder="FROM (enter address or postcode)">
					</div>
					<div>
						<label>To</label>
						<input type="text" placeholder="TO (enter address or postcode)">
					</div>
					<div>
						<select>
							<option value="">Leave now</option>
							<option value="">Leave now</option>
							<option value="">Leave now</option>
						</select>

						<select>
							<option value="">Today</option>
							<option value="">Leave now</option>
							<option value="">Leave now</option>
						</select>

						<select>
							<option value="">10:00</option>
							<option value="">Leave now</option>
							<option value="">Leave now</option>
						</select>
					</div>

					<div>
						<input type="submit" value="PLAN YOUR JOURNEY">
					</div>
				</form>

				<h2>Find your nearest</h2>
				<p>Looking for your nearest bus stop, metro station or job centre? Enter a place name or postcode below.</p>

				<form action="" class="search">
					<input type="text" name="search">
				</form>

			</div>
		</div>
	</div>
</div>


<?php include 'scripts.inc.php' ?>

</body>

</html>
